import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../global/colors";
import * as ImagePicker from "expo-image-picker";
import { setCameraImage } from "../features/UserSlice";
import { useGetProfileImageQuery, usePostProfileImageMutation } from "../services/shopServices";

export default function ImageSelector({ navigation }) {
  const [image, setImage] = useState(null);
  const [triggerPostImage, result] = usePostProfileImageMutation()
  const { localId } = useSelector(state => state.auth.value)
  const { data: imageFromBase } = useGetProfileImageQuery(localId);
  const defaultImageRoute = "../../assets/user.png";
  
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
        quality: 0.1,
      });
      //? agregar opcion para seleccionar desde galeria

      if (!result.canceled) {
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
      }
    }
  };

  const confirmImage = () => {
    try {
      dispatch(setCameraImage(image))
      triggerPostImage({ image, localId })
      navigation.goBack()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {image || imageFromBase ? (
        <>
          <Image
            style={styles.img}
            resizeMode="contain"
            source={{ uri: image || imageFromBase?.image }}
          />
          <Pressable
            onPress={pickImage}
            style={({ pressed }) => [
              styles.btn,
              { opacity: pressed ? 0.6 : 1 },
            ]}
          >
            <Text style={styles.btnText}>Take new Photo</Text>
          </Pressable>
          <Pressable
            onPress={confirmImage}
            style={({ pressed }) => [
              styles.btn,
              { opacity: pressed ? 0.6 : 1 },
            ]}
          >
            <Text style={styles.btnText}>Confirm Photo</Text>
          </Pressable>
        </>
      ) : (
        <>
            <Image
              style={styles.img}
              resizeMode="cover"
              source={require(defaultImageRoute)}
            />
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
    borderRadius: 100,
  },
  imgContainer: {
    margin: 10,
  },
  btn: {
    backgroundColor: colors.lightBlue,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  btnText:{
    color: 'white',
    fontSize: 16
  },
});
