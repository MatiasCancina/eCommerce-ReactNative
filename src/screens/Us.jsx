import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Us({ navigation, route }) {
  const { id } = route.params;

  const goHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Text>Us</Text>
      <Text>{id}</Text>
      <Button onPress={() => goHome()} title="Back" />
    </View>
  );
}

const styles = StyleSheet.create({});
