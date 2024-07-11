import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../global/colors";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../services/shopServices";
import AddButton from "../components/AddButton";
import { clearUser } from "../features/UserSlice";

export default function MyProfile({ navigation }) {
  const dispatch = useDispatch();
  const { imageCamera, localId } = useSelector((state) => state.auth.value);
  const { data: imageFromBase } = useGetProfileImageQuery(localId);

  const launchCamera = async () => {
    navigation.navigate("ImageSelectorScreen");
  };

  const launchLocation = async () => {
    navigation.navigate("ListAdressScreen");
  };

  const logOut = async () => {
    dispatch(clearUser())
  };

  const defaultImageRoute = "../../assets/user.png";

  return (
    <View style={styles.container}>
      {imageFromBase || imageCamera ? (
        <Image
          source={{ uri: imageFromBase?.image || imageCamera }}
          style={styles.img}
          resizeMode="cover"
        />
      ) : (
        <Image
          style={styles.img}
          resizeMode="cover"
          source={require(defaultImageRoute)}
        />
      )}
      <AddButton
        onPress={launchCamera}
        title={
          imageFromBase || imageCamera
            ? "Modify Profile Picture"
            : "AddProfile Picture"
        }
      />
      <AddButton title="My Address" onPress={launchLocation} />
      <AddButton title="Log Out" onPress={logOut} />
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
    marginVertical: 20,
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
