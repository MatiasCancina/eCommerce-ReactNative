import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function CartItem({ item }) {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {item.title} {item.quantity}
        </Text>
        <Text>{item.brand}</Text>
        <Text>{item.price}</Text>
      </View>
      <Entypo name="trash" size={30} color={"black"} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {},
  textContainer: {},
  text: {},
});
