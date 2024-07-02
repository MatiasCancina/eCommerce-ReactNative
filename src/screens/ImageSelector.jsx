import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { colors } from "../global/colors";
import * as ImagePicker from "expo-image-picker";

export default function ImageSelector({ navigation }) {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const verifyCameraPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (!status) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();

    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 1,
      });
      //? agregar opcion para seleccionar desde galeria

      if (!result.canceled) {
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
      }
    }
  };

  const confirmImage = () => {};

  return (
    <View style={styles.container}>
      {image ? (
        <>
          <Image
            style={styles.img}
            resizeMode="contain"
            source={{ uri: image }}
          />
          <Pressable
            onPress={pickImage}
            style={({ pressed }) => [
              styles.btn,
              { opacity: pressed ? 0.6 : 1 },
            ]}
          >
            <Text>Take new Photo</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.btn,
              { opacity: pressed ? 0.6 : 1 },
            ]}
          >
            <Text>Confirm Photo</Text>
          </Pressable>
        </>
      ) : (
        <>
          <View style={styles.imgContainer}>
            <Text>No photo to shown</Text>
          </View>
          <Pressable
            onPress={pickImage}
            style={({ pressed }) => [
              styles.btn,
              { opacity: pressed ? 0.6 : 1 },
            ]}
          >
            <Text>Take a photo</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  imgContainer: {
    margin: 10,
    // border
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
