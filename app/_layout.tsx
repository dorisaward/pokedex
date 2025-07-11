import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootStackParamList from "@/app/types/RootStackParamList";
import Search from "@/app/search";
import Details from "@/app/details";
import Favourites from "@/app/favourites";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Favourites" component={Favourites} />
    </Stack.Navigator>
  );
}
