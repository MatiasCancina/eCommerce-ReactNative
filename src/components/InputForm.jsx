import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../global/colors";

const InputForm = ({ label, onChange, error = "", isSecure = false }) => {
  const [input, setInput] = useState("");

  const onChangeText = (text) => {
    setInput(text);
    onChange(text);
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={onChangeText}
          secureTextEntry={isSecure}
          placeholder={label}
        />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    color: colors.darkGray,
    backgroundColor: '#fff',
    borderRadius: 10,
    // Sombra para iOS
    shadowColor: '#000',
    fontWeight: '600',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Sombra para Android
    elevation: 5,
  },
  error: {
    // paddintTop: 2,
    fontSize: 16,
    color: "red",
    fontStyle: "italic",
  },
  input: {
    width: "90%",
    // padding: 2,
    fontSize: 14,
  },
});
