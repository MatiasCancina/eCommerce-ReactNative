import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopServices";

export default function Cart() {
  const { items: CartData, total } = useSelector((state) => state.cart.value);
  const [triggerPostOrder, result] = usePostOrderMutation();

  const onConfirmOrder = () => {
    triggerPostOrder({ items: CartData, user: "Matias2", total  });
  };

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
        <Pressable onPress={onConfirmOrder}>
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
