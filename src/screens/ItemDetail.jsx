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
import { colors } from "../global/colors";
import { capitalizeFirstLetter } from "../global/capitalizeFirstLetter";

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

  if (!product) return <Text style={{ fontSize: 20, fontWeight: '500' }}>Loading...</Text>;

  return (
    <View>
      <View
        style={
          orientation === "portrait"
            ? styles.mainContainer
            : styles.mainContainerLandscape
        }
      >
        <View style={styles.cardContainer}>
          {product.images ?
            <Image
              source={{ uri: product.images[0] }}
              style={
                orientation === "portrait" ? styles.image : styles.imageLandscape
              }
              resizeMode="cover"
            />
            :
            <Text style={styles.image}>
              no image
            </Text>
          }
          <View
            style={
              orientation === "portrait"
                ? styles.textContainer
                : styles.textContainerLandscape
            }
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

              <Text style={styles.title}>{capitalizeFirstLetter(product.title)}</Text>
              <Text style={styles.price}>${product.price}</Text>
            </View>
            <Text style={styles.description}>{capitalizeFirstLetter(product.description)} </Text>
            <Button title="Add cart" onPress={handleAddCart} />
          </View>
        </View>
      </View>
      <Button
        onPress={() => {
          navigation.goBack();
        }}
        title="Back"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "95%",
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    gap: 10,
  },
  cardContainer: {
    backgroundColor: colors.darkGray,
    padding: 30,
    borderRadius: 10,
    height: '80%',
    width: '100%',
    alignItems:'center'
  },
  image: {
    width: 260,
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
  title: {
    fontWeight: '600',
    fontSize: 30,
    width: '80%',
  },
  description: {
    marginVertical: 20,
    fontSize: 17,
  },
  price: {
    fontWeight: '500',
    fontSize: 25,
  },
});
