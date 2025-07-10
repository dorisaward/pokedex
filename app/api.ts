const fetchPokemon = async (userInput: string) => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + userInput,
  );
  return response.json();
};

export default { fetchPokemon };
