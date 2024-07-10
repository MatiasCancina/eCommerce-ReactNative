import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../global/colors";

const AddButton = ({
  title = "",
  onPress = () => {},
  color = colors.brown600,
}) => {
  return (
    <Pressable
      style={{ ...styles.button, backgroundColor: color }}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  button: {
    width: "80%",
    borderWidth: 1,
    backgroundColor: colors.brown600,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  text: {
    fontSize: 18,
    color: colors.green300,
  },
});
