import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../global/colors";
import { capitalizeFirstLetter } from "../global/capitalizeFirstLetter";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../features/CartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeCartItem(item.id));
  };

  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {capitalizeFirstLetter(item.title)}
        </Text>
        <Text>{item.brand}</Text>
        <Text style={{ fontWeight: '300' }}>Quantity: {item.quantity}</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 16, color: colors.esmeraldGreen }}>$ {item.price}</Text>
      </View>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{ uri: item.images[0] }}
        width={'20%'}
        height={100}
      />
      <Pressable onPress={handleRemoveItem}>
        <Entypo name="trash" size={30} color={"red"} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 150,
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  text: {
    fontSize: 19,
    fontWeight: '500',
  },
  text2: {
    fontSize: 14,
    color: colors.green900,
  },

});
