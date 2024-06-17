import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import CartData from "../data/cart.json";
import CartItem from "../components/CartItem";

export default function Cart() {
  let total = 0;

  for (const Item of CartData) {
    total += Item.price * Item.quantity;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={CartData}
        renderItem={({ item }) => {
          return <CartItem item={item} />;
        }}
        keyExtractor={(product) => product.id}
      />

      <View>
        <Pressable>
          <Text>Confirm Order</Text>
        </Pressable>
        <Text>Total: $ {total}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 100,
  },
});
