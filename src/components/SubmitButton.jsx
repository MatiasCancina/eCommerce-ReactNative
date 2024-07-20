import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../global/colors";

const SubmitButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
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
