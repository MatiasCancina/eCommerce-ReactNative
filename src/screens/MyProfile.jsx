import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../global/colors";

export default function MyProfile({ navigation }) {
  const [image, setImage] = useState(null);

  return (
    <View style={styles.container}>
      {image ? null : (
        <Image
          style={styles.img}
          resizeMode="cover"
          source={require("../../assets/user.png")}
        />
      )}
      <Pressable
      onPress={() => navigation.navigate('ImageSelectorScreen')}
        style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.6 : 1 }]}
      >
        <Text>Add Profile Picture</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  img: {
    height: 200,
    width: 200,
  },
  btn: {
    backgroundColor: colors.green300,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
