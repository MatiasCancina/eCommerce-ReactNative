import { Pressable, StyleSheet, TextInput, View } from "react-native";
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
        <FontAwesome5 name="search" size={24} color='white' />
      </Pressable>

      <Pressable onPress={() => setKeyword("")}>
        <FontAwesome5 name="eraser" size={24} color='white' />
      </Pressable>

      <Pressable onPress={() => goBack()}>
        <FontAwesome5 name="backspace" size={24} color='white' />
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
    paddingVertical: 10,
    backgroundColor: colors.lightBlue,
  },
  input: {
    width: 250,
    padding: 8,
    fontSize: 18,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
