export type RootStackParamList = {
  Search: undefined;
  Details: { pokemonName: string };
  Favourites: { pokemonName: string } | undefined;
};
