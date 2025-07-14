import Favourites from "@/app/favourites";
import { render, cleanup } from "@testing-library/react-native";

afterEach(cleanup);

jest.mock("@/app/storage/load");
jest.mock("expo-router", () => ({
  dispatch: jest.fn(),
  useNavigation: jest.fn(() => jest.fn()),
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
