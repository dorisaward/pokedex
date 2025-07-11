import { SafeAreaView, Text } from "react-native";
import { Suspense, useEffect, useState } from "react";
import api from "@/app/api";
import RootStackParamList from "@/app/types/RootStackParamList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import DisplayPokemonDetails from "@/app/components/DisplayPokemonDetails";
import ErrorBoundary from "@/app/components/ErrorBoundary";

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
      <ErrorBoundary>
        <Suspense fallback={<Text>Loading...</Text>}>
          <DisplayPokemonDetails
            canSave={true}
            pokemonPromise={pokemonPromise}
          />
        </Suspense>
      </ErrorBoundary>
    </SafeAreaView>
  );
}
