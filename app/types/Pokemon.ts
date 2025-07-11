import * as z from "zod";

const pokemon = z.looseObject({
  /**
   * The pokedex number of the Pokemon
   */
  id: z.number(),

  /**
   * The name of the Pokemon
   */
  name: z.string(),
  /**
   * The height of the Pokemon
   */
  height: z.number(),

  /**
   * The weight of the Pokemon
   */
  weight: z.number(),

  /**
   * A set of sprites used to depict this Pokemon in the game.
   */
  sprites: z.looseObject({
    /**
     * The front of the Pokemon
     */
    front_default: z.nullish(z.string()),
  }),

  /**
   * The species of the Pokemon
   */
  species: z.looseObject({
    name: z.string(),

    url: z.string(),
  }),

  /**
   * A list of the games the Pokémon appeared in
   */
  game_indices: z.array(
    z.looseObject({
      /**
       * The id of the game the Pokemon appeared in
       * */
      game_index: z.number(),
    }),
  ),

  /**
   * The stats of the Pokemon
   */
  stats: z.array(
    z.looseObject({
      /**
       * The specific stat of the Pokemon
       */
      stat: z.looseObject({
        name: z.string(),

        url: z.string(),
      }),
    }),
  ),
});

export type Pokemon = z.infer<typeof pokemon>;
const parseResponse = (data: unknown): Pokemon | undefined => {
  if (!data) return undefined;
  return pokemon.parse(data);
};

export default parseResponse;
