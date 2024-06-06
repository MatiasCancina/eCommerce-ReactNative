import { Pressable, StyleSheet, Text, View } from "react-native";
import Card from "./Card";
import { colors } from "../global/colors";
import { capitalizeFirstLetter } from "../global/capitalizeFirstLetter";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

export default function Category({ category, selectCategory }) {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Medium": require("../../assets/fonts/Inter-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView}>
      <Card style={styles.cardContainer}>
        <Pressable onPress={() => selectCategory(category)}>
          <Text style={styles.title}>{capitalizeFirstLetter(category)}</Text>
        </Pressable>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "flex-start ",
    borderWidth: 4,
    borderRadius: 10,
    borderColor: colors.brown600,
    backgroundColor: colors.brown200,
  },
  title: {
    fontFamily: "Inter-Medium",
    fontSize: 17,
  },
});
