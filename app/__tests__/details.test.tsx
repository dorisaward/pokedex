import Details from "@/app/details";
import RootStackParamList from "@/app/types/RootStackParamList";
import { RouteProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { render, cleanup } from "@testing-library/react-native";
import { PropsWithChildren } from "react";
import { mockPokemon } from "@/app/utils/testHelpers";

afterEach(cleanup);

jest.mock("@/app/components/DisplayPokemonDetails", () =>
  // eslint-disable-next-line react/display-name
  (props: unknown) => <>{JSON.stringify(props)}</>,
);

jest.mock("@/app/utils/api", () => ({
  fetchPokemon: jest.fn(() => [mockPokemon]),
}));

jest.mock("@/app/components/SuspenseAndErrorBoundary", () =>
  // eslint-disable-next-line react/display-name
  (props: PropsWithChildren) => <>{props.children}</>,
);

jest.mock("expo-secure-store");

describe("details", () => {
  it("renders", () => {
    // Given
    const pokemonName = "This is overridden by fetchPokemon";
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
    const { toJSON, queryByText } = render(renderable);

    // Then
    expect(toJSON()).toMatchSnapshot();
    expect(queryByText(pokemonName)).toBeFalsy();
  });
});
