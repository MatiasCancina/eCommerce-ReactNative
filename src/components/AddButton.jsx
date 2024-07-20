import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../global/colors";

const AddButton = ({
  title = "",
  onPress = () => { },
  style = {},
  titleStyle = {}
}) => {
  return (
    <Pressable
      style={[styles.button, style]}
      onPress={onPress}
    >
      <Text style={[styles.text, titleStyle]}>{title}</Text>
    </Pressable>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    backgroundColor: colors.lightGray,
    borderColor: colors.marineBlue,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    paddingHorizontal: 16,
  },
  text: {},
});
