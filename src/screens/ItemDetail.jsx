import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useGetProductByIdQuery } from "../services/shopServices";
import { addCartItem } from "../features/CartSlice";

export default function ItemDetail({ route, navigation }) {
  const { width, height } = useWindowDimensions();
  const [orientation, setOrienation] = useState("portait");

  const { productId: idSelected } = route.params;

  const dispatch = useDispatch();

  const {
    data: product,
    error,
    isLoading,
  } = useGetProductByIdQuery(idSelected);

  useEffect(() => {
    if (width > height) setOrienation("landscape");
    else setOrienation("portrait");
  }, [width, height]);

  const handleAddCart = () => {
    dispatch(addCartItem({ ...product, quantity: 1 }));
  };

  if (!product) return <Text>Loading...</Text>;

  return (
    <View>
      <Button
        onPress={() => {
          navigation.goBack();
        }}
        title="Back"
      />
      <View
        style={
          orientation === "portrait"
            ? styles.mainContainer
            : styles.mainContainerLandscape
        }
      >
        <Image
          source={{ uri: product.images[0] }}
          style={
            orientation === "portrait" ? styles.image : styles.imageLandscape
          }
          resizeMode="cover"
        />
        <View
          style={
            orientation === "portrait"
              ? styles.textContainer
              : styles.textContainerLandscape
          }
        >
          <Text>{product.title} </Text>
          <Text>{product.description} </Text>
          <Text style={styles.price}>${product.price}</Text>
          <Button title="Add cart" onPress={handleAddCart} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    width: "100%",
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    gap: 10,
  },
  image: {
    width: "100%",
    height: 250,
  },
  imageLandscape: {
    width: "45%",
    height: 200,
  },

  textContainer: {
    flexDirection: "column",
  },
  textContainerLandscape: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    gap: 10,
  },
  price: {
    textAlign: "right",
  },
});
