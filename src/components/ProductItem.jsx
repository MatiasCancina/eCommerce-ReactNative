import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/colors";
import Card from "./Card";

export default function ProductItem({ product }) {
  console.log(product.images[0]);
  return (
    <Card style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Image
        resizeMode="cover"
        source={{ uri: product.images[0] }}
        style={styles.image}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
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
  image: { height: 120, width: 100, borderRadius: 8 },
  title: {
    fontFamily: "Inter-Medium",
    fontSize: 17,
  },
});
