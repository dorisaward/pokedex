import { Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/types/RootStackParamList";

export default function Favourites({
  route: { params },
}: NativeStackScreenProps<RootStackParamList, "Favourites">) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{params?.pokemonName}</Text>
    </View>
  );
}
