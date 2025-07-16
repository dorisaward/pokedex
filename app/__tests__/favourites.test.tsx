import Favourites from "@/app/favourites";
import { render, cleanup } from "@testing-library/react-native";
import { PropsWithChildren } from "react";

afterEach(cleanup);

jest.mock("@/app/components/DisplayPokemonDetails", () =>
  // eslint-disable-next-line react/display-name
  (props: unknown) => <>{JSON.stringify(props)}</>,
);

const mockLoadAll = jest.fn().mockResolvedValue([]);
jest.mock("@/app/storage/load", () => () => mockLoadAll);

jest.mock("@/app/components/SuspenseAndErrorBoundary", () =>
  // eslint-disable-next-line react/display-name
  (props: PropsWithChildren) => <>{props.children}</>,
);

jest.mock("expo-router", () => ({
  useNavigation: () => ({
    dispatch: jest.fn(),
  }),
}));

describe("favourites", () => {
  it("renders", () => {
    // Given
    const renderable = <Favourites />;

    // When
    const { toJSON } = render(renderable);

    // Then
    expect(toJSON()).toMatchSnapshot();
  });
});
