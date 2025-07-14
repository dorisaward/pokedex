import * as SecureStore from "expo-secure-store";
import parseResponse, { Pokemon } from "@/app/types/Pokemon";
import kantoPokemon from "@/app/storage/kantoPokemon";

async function load(pokemonName: string): Promise<Pokemon | undefined> {
  const result = await SecureStore.getItemAsync(pokemonName);

  try {
    return result ? parseResponse(JSON.parse(result)) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
}

function loadAll(): Promise<Pokemon | undefined>[] {
  return kantoPokemon.map((pokemonName) => load(pokemonName));
}

export default loadAll;
