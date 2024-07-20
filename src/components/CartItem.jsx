import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../global/colors";
import { capitalizeFirstLetter } from "../global/capitalizeFirstLetter";

export default function CartItem({ item }) {
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
      <View style={{ height: 100, width: 100, backgroundColor: 'red', borderRadius: 8 }}>
        <Text>no image</Text>
      </View>
      <Entypo name="trash" size={30} color={"red"} />
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
