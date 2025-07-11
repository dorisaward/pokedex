import Details from "@/app/details";
import { RootStackParamList } from "@/app/types/RootStackParamList";
import { RouteProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { render, cleanup } from "@testing-library/react-native";
import { Pokemon } from "@/app/types/Pokemon";
import { PropsWithChildren } from "react";

afterEach(cleanup);

const mockPokemon: Pokemon = {
  height: 0,
  id: 0,
  name: "Mock Pokemon",
  species: {
    name: "mock species",
    url: "",
  },
  sprites: {},
  stats: [
    {
      stat: {
        name: "mock stat",
        url: "",
      },
      effort: 0,
      base_stat: 0,
    },
  ],
  weight: 0,
};

jest.mock("@/app/components/DisplayPokemonDetails", () =>
  // eslint-disable-next-line react/display-name
  (props: { pokemonPromise: Promise<Pokemon> }) => (
    <>{JSON.stringify(props.pokemonPromise)}</>
  ),
);

jest.mock("@/app/api", () => ({
  fetchPokemon: jest.fn().mockResolvedValue(mockPokemon),
}));

jest.mock("@/app/components/ErrorBoundary", () =>
  // eslint-disable-next-line react/display-name
  (props: PropsWithChildren) => <>{props.children}</>,
);

describe("details", () => {
  it("renders", async () => {
    // Given
    const pokemonName = "mew";
    const navigation: NativeStackNavigationProp<
      RootStackParamList,
      "Details",
      undefined
    > = {} as NativeStackNavigationProp<
      RootStackParamList,
      "Details",
      undefined
    >;
    const route: RouteProp<RootStackParamList, "Details"> = {
      key: "Details",
      name: "Details",
      path: undefined,
      params: { pokemonName },
    };
    const renderable = <Details navigation={navigation} route={route} />;

    // When
    const { toJSON } = render(renderable);

    // Then
    expect(toJSON()).toMatchSnapshot();
  });
});
