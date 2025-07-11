import * as SecureStore from "expo-secure-store";
import { Pokemon } from "@/app/types/Pokemon";

async function save(pokemonName: string, details: Pokemon) {
  const pokemon: Pokemon = {
    name: details.name,
    species: { name: details.species.name, url: details.species.url },
    sprites: { front_default: details.sprites.front_default },
    stats: details.stats.map((stat) => ({
      stat: { url: stat.stat.url, name: stat.stat.name },
    })),
    id: details.id,
    weight: details.weight,
    height: details.height,
    game_indices: details.game_indices.map((index) => ({
      game_index: index.game_index,
    })),
  };
  await SecureStore.setItemAsync(pokemonName, JSON.stringify(pokemon));
}

export default save;
