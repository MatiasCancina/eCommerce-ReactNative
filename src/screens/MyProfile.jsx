import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../services/shopServices";

export default function MyProfile({ navigation }) {
  const [image, setImage] = useState(null);
  const { imageCamera, localId } = useSelector((state) => state.auth.value);
  const { data: imageFromBase } = useGetProfileImageQuery(localId);

  useEffect(() => {
    if (imageFromBase) {
      console.log(imageFromBase);
      setImage(imageFromBase.image);
    }
  }, [imageFromBase]);

  return (
    <View style={styles.container}>
      {image ? (
        <Image style={styles.img} resizeMode="cover" source={{ uri: image }} />
      ) : (
        <Image
          style={styles.img}
          resizeMode="cover"
          source={require("../../assets/user.png")}
        />
      )}
      <Pressable
        onPress={() => navigation.navigate("ImageSelectorScreen")}
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
    marginTop: 20,
    
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
