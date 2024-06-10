import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../global/colors";

export default function Search({ onSearch, goBack }) {
  const [keyword, setKeyword] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={keyword}
        onChangeText={setKeyword}
      />
      <Pressable onPress={() => onSearch(keyword)}>
        <FontAwesome5 name="search" size={24} color="black" />
      </Pressable>

      <Pressable onPress={() => setKeyword("")}>
        <FontAwesome5 name="eraser" size={24} color="black" />
      </Pressable>

      <Pressable onPress={() => goBack()}>
        <FontAwesome5 name="backspace" size={24} color="black" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
    marginVertical: 10,
  },
  input: {
    width: 250,
    padding: 8,
    fontSize: 18,
    backgroundColor: colors.green300,
    borderRadius: 10,
  },
});
