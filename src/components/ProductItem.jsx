import { Image, Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../global/colors";
import Card from "./Card";
import { capitalizeFirstLetter } from "../global/capitalizeFirstLetter";

import { useDispatch } from "react-redux";
import { setItemSelected } from "../features/ShopSlice";

export default function ProductItem({ product, navigation }) {
  const dispatch = useDispatch();

  const handleNavigate = () => {
    dispatch(setItemSelected(product.title));
    navigation.navigate("ItemDetail", { productId: product.id });
  };

  return (
    <Pressable onPress={handleNavigate}>
      <Card style={styles.container}>
        <Text style={styles.title}>{capitalizeFirstLetter(product.title)}</Text>
        {product.image ?
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{ uri: product.images[0] }}
          />
          :
          <Text style={styles.image}>no image</Text>
        }
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    marginVertical: 10,
    alignItems: "center",
    borderWidth: 4,
    borderRadius: 10,
    borderColor: colors.midBlue,
    backgroundColor: colors.pastelBlue,
    height: 120,
    width: 300,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  image: {
    height: "100%",
    width: "40%",
  },
  title: {
    fontFamily: "Inter-Medium",
    fontSize: 17,
    width: "60%",
    paddingHorizontal: 10,
  },
});
