import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../global/colors";

const SubmitButton = ({ onPress, title }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.marineBlue,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 70
  },
  text: {
    color: 'white',
    fontSize: 22,
  },
});
