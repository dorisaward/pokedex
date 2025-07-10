import { TextInput, View, Button } from "react-native";
import { useCallback, useState } from "react";
import { useNavigation } from "expo-router";
import { RootStackParamList } from "@/app/types/RootStackParamList";
import { NavigationProp } from "@react-navigation/core";

export default function Search() {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const [userInput, setUserInput] = useState<string | undefined>();
  const handleNavigation = useCallback(() => {
    if (!userInput) {
      return;
    }
    navigate("Details", { pokemonName: userInput });
  }, [userInput, navigate]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        inputMode="text"
        placeholder="Enter a pokemon"
        onChangeText={setUserInput}
      />
      {userInput && <Button title={userInput} onPress={handleNavigation} />}
    </View>
  );
}
