import { View, Text, Image, Button } from "react-native";
import { use } from "react";
import parseResponse, { Pokemon } from "@/app/types/Pokemon";
import { NavigationProp } from "@react-navigation/core";
import RootStackParamList from "@/app/types/RootStackParamList";
import { useNavigation } from "expo-router";
import save from "@/app/storage/save";

interface Props {
  pokemonPromise?: Promise<Response | Pokemon | undefined>;
  canSave: boolean;
}

const DisplayPokemonDetails = ({ pokemonPromise, canSave }: Props) => {
  const { navigate, goBack } =
    useNavigation<NavigationProp<RootStackParamList>>();

  if (!pokemonPromise) {
    return null;
  }

  const pokemonResponse = use(pokemonPromise);
  const pokemon: Pokemon | undefined = parseResponse(pokemonResponse);

  if (!pokemon) {
    return null;
  }

  const { name, species, sprites, stats, id, weight, height, game_indices } =
    pokemon;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "black",
        margin: 20,
        padding: 2,
        width: "90%",
      }}
    >
      <Text>{name}</Text>
      {canSave && (
        <Button
          title={"Favourite " + name}
          onPress={() =>
            save(name, pokemon)
              .then(() => {
                navigate("Favourites");
              })
              .catch((error) => {
                console.error(JSON.stringify(error));
                goBack();
              })
          }
        />
      )}
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
      <Text>
        Number of games {name} has been in: {game_indices.length}
      </Text>
    </View>
  );
};

export default DisplayPokemonDetails;
