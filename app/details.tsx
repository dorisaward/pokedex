import { Text, View } from "react-native";
import { Suspense, useEffect, useState } from "react";
import api from "./api";
import { RootStackParamList } from "@/app/types/RootStackParamList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import DisplayPokemonDetails from "@/app/components/DisplayPokemonDetails";

export default function Details({
  route: {
    params: { pokemonName },
  },
}: NativeStackScreenProps<RootStackParamList, "Details">) {
  const [pokemonPromise, setPokemonPromise] = useState<Promise<Response>>(
    api.fetchPokemon(pokemonName),
  );

  useEffect(() => {
    if (pokemonName) {
      setPokemonPromise(api.fetchPokemon(pokemonName));
    }
  }, [pokemonName]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Suspense fallback={<Text>Loading...</Text>}>
        <DisplayPokemonDetails pokemonPromise={pokemonPromise} />
      </Suspense>
    </View>
  );
}
