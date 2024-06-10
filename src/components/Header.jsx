import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/colors";

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    backgroundColor: colors.brown600,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    marginTop: 20,
  },
});
