import { View, Text, Image, Button } from "react-native";
import { use } from "react";
import parseResponse from "@/app/types/Pokemon";
import { NavigationProp } from "@react-navigation/core";
import { RootStackParamList } from "@/app/types/RootStackParamList";
import { useNavigation } from "expo-router";

const DisplayPokemonDetails = ({
  pokemonPromise,
}: {
  pokemonPromise?: Promise<Response>;
}) => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  if (!pokemonPromise) {
    return null;
  }
  const pokemon = use(pokemonPromise);
  const { name, species, sprites, stats, id, weight, height, game_indices } =
    parseResponse(pokemon);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{name}</Text>
      <Button
        title={"Favourite " + name}
        onPress={() => navigate("Favourites", { pokemonName: name })}
      />
      {sprites.front_default && (
        <Image
          style={{ width: 200, height: 200 }}
          source={{
            uri: sprites.front_default,
          }}
        />
      )}
      <Text>Pokedex No: {id}</Text>
      <Text>Name of Species: {species.name}</Text>
      <Text>Stats: </Text>
      {stats.map((stat) => (
        <Text key={stat.stat.url}>{stat.stat.name}, </Text>
      ))}
      <Text>Weight: {weight}</Text>
      <Text>Height: {height}</Text>
      <Text>Number of games {name} has been in: {game_indices.length}</Text>
    </View>
  );
};

export default DisplayPokemonDetails;
