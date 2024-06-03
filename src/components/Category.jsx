import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../global/colors";
import { capitalizeFirstLetter } from "../global/capitalizeFirstLetter";

export default function Category({ item }) {
  return (
    <Card style={styles.cardContainer}>
      <Text style={styles.title}>{capitalizeFirstLetter(item)}</Text>
    </Card>
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
    fontSize: 17,
  },
});
