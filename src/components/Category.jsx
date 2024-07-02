import { Pressable, StyleSheet, Text, View } from "react-native";
import Card from "./Card";
import { colors } from "../global/colors";
import { capitalizeFirstLetter } from "../global/capitalizeFirstLetter";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { Feather } from "@expo/vector-icons";

import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/ShopSlice";

export default function Category({ category, navigation }) {
  const dispatch = useDispatch();

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

  const handleNavigate = () => {
    dispatch(setCategorySelected(category.label));
    navigation.navigate("ItemListCategory", { category });
  };

  return (
    <View onLayout={onLayoutRootView}>
      <Card style={styles.cardContainer}>
        <Pressable
          onPress={handleNavigate}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.title}>
            {capitalizeFirstLetter(category.label)}
          </Text>
          <Feather
            name={category.icon.name}
            size={category.icon.size}
            color={category.icon.color}
          />
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
