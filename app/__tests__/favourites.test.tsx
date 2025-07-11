import Favourites from "@/app/favourites";
import RootStackParamList from "@/app/types/RootStackParamList";
import { RouteProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { render, cleanup } from "@testing-library/react-native";

afterEach(cleanup);

describe("favourites", () => {
  it("renders", () => {
    // Given
    const navigation: NativeStackNavigationProp<
      RootStackParamList,
      "Favourites",
      undefined
    > = {} as NativeStackNavigationProp<
      RootStackParamList,
      "Favourites",
      undefined
    >;
    const route: RouteProp<RootStackParamList, "Favourites"> = {
      key: "Favourites",
      name: "Favourites",
      params: undefined,
      path: undefined,
    };
    const renderable = <Favourites navigation={navigation} route={route} />;

    // When
    const { toJSON } = render(renderable);

    // Then
    expect(toJSON()).toMatchSnapshot();
  });
  it("renders, given a pokemon name", () => {
    // Given
    const pokemonName = "mew";
    const navigation: NativeStackNavigationProp<
      RootStackParamList,
      "Favourites",
      undefined
    > = {} as NativeStackNavigationProp<
      RootStackParamList,
      "Favourites",
      undefined
    >;
    const route: RouteProp<RootStackParamList, "Favourites"> = {
      key: "Favourites",
      name: "Favourites",
      params: { pokemonName },
      path: undefined,
    };
    const renderable = <Favourites navigation={navigation} route={route} />;

    // When
    const { toJSON } = render(renderable);

    // Then
    expect(toJSON()).toMatchSnapshot();
  });
});
