import { View, Text } from "react-native";
import { use } from "react";
import parseResponse from "@/app/types/Pokemon";

const DisplayPokemonDetails = ({
  pokemonPromise,
}: {
  pokemonPromise?: Promise<Response>;
}) => {
  if (!pokemonPromise) {
    return null;
  }
  const pokemon = use(pokemonPromise);
  const { name, species, sprites, stats, id, weight, height } =
    parseResponse(pokemon);
  return (
    <View>
      <Text>{id}</Text>
      <Text>{name}</Text>
      <Text>{species.name}</Text>
      <Text>{stats[0].stat.name}</Text>
      <Text>{sprites.front_default}</Text>
      <Text>{weight}</Text>
      <Text>{height}</Text>
    </View>
  );
};

export default DisplayPokemonDetails;
