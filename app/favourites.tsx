import { Button, FlatList, Text, SafeAreaView } from "react-native";
import RootStackParamList from "@/app/types/RootStackParamList";
import loadAll from "@/app/storage/load";
import DisplayPokemonDetails from "@/app/components/DisplayPokemonDetails";
import { Suspense } from "react";
import { useNavigation } from "expo-router";
import { NavigationProp, StackActions } from "@react-navigation/core";

export default function Favourites() {
  const { dispatch } = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        title={"Search again"}
        onPress={() => dispatch(StackActions.popToTop())}
      />
      <FlatList
        data={loadAll()}
        renderItem={({ item }) => (
          <Suspense fallback={<Text>Loading...</Text>}>
            <DisplayPokemonDetails canSave={false} pokemonPromise={item} />
          </Suspense>
        )}
      />
    </SafeAreaView>
  );
}
