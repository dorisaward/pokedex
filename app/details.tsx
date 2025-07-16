import { SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import api from "@/app/utils/api";
import RootStackParamList from "@/app/types/RootStackParamList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import DisplayPokemonDetails from "@/app/components/DisplayPokemonDetails";
import SuspenseAndErrorBoundary from "@/app/components/SuspenseAndErrorBoundary";

export default function Details({
  route: {
    params: { pokemonName },
  },
}: NativeStackScreenProps<RootStackParamList, "Details">) {
  const [pokemonPromise, setPokemonPromise] = useState<Promise<Response>>();

  useEffect(() => {
    if (pokemonName) {
      setPokemonPromise(api.fetchPokemon(pokemonName));
    }
  }, [pokemonName]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SuspenseAndErrorBoundary>
        <DisplayPokemonDetails canSave={true} pokemonPromise={pokemonPromise} />
      </SuspenseAndErrorBoundary>
    </SafeAreaView>
  );
}
