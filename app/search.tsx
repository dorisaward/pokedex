import { TextInput, SafeAreaView, Button } from "react-native";
import { useCallback, useState } from "react";
import { useNavigation } from "expo-router";
import RootStackParamList from "@/app/types/RootStackParamList";
import { NavigationProp } from "@react-navigation/core";

export default function Search() {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const [userInput, setUserInput] = useState<string | undefined>();
  const handleNavigation = useCallback(() => {
    if (!userInput) {
      return;
    }
    navigate("Details", { pokemonName: userInput.trim() });
  }, [userInput, navigate]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <TextInput
        inputMode="text"
        placeholder="Enter a pokemon"
        onChangeText={setUserInput}
        hitSlop={50}
      />
      <Button title={"Search"} onPress={handleNavigation} />
      <Button
        title={"View Favourites"}
        onPress={() => navigate("Favourites")}
      />
    </SafeAreaView>
  );
}
