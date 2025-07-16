import DisplayPokemonDetails from "@/app/components/DisplayPokemonDetails";
import { mockPokemon } from "@/app/utils/testHelpers";
import { render } from "@testing-library/react-native";
import { Pokemon } from "@/app/types/Pokemon";

jest.mock("expo-router", () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
  }),
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  use: jest.fn((args: unknown) => args),
}));

describe("display pokemon details", () => {
  it("renders, given canSave true", () => {
    // Given
    const canSave = true;
    const pokemonPromise = mockPokemon as unknown as Promise<Pokemon>;
    const renderable = (
      <DisplayPokemonDetails
        canSave={canSave}
        pokemonPromise={pokemonPromise}
      />
    );

    // When
    const { getByText, getByLabelText } = render(renderable);

    // Then
    expect(getByText(mockPokemon.name)).toBeTruthy();
    expect(getByLabelText("An image of " + mockPokemon.name)).toBeTruthy();
    expect(getByText("Pokedex No: " + mockPokemon.id.toString())).toBeTruthy();
    expect(
      getByText("Name of Species: " + mockPokemon.species.name),
    ).toBeTruthy();
    expect(getByText("Stats:")).toBeTruthy();
    mockPokemon.stats.forEach((stat) => {
      expect(getByText(stat.stat.name, { exact: false })).toBeTruthy();
    });
    expect(getByText("Weight: " + mockPokemon.weight.toString())).toBeTruthy();
    expect(getByText("Height: " + mockPokemon.height.toString())).toBeTruthy();
    expect(
      getByText(
        "Number of games " +
          mockPokemon.name +
          " has been in: " +
          mockPokemon.game_indices.length,
      ),
    ).toBeTruthy();
  });
});
