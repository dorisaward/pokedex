import { Pokemon } from "@/app/types/Pokemon";

export const mockPokemon: Pokemon = {
  height: 0,
  id: 0,
  name: "Mock Pokemon",
  species: {
    name: "mock species",
    url: "www.example.org/species",
  },
  sprites: {
    front_default: "www.example.org/img.png",
  },
  stats: [
    {
      stat: {
        name: "mock stat",
        url: "www.example.org/stat",
      },
      effort: 0,
      base_stat: 0,
    },
  ],
  weight: 0,
  game_indices: [],
};
