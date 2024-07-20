import { FlatList, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { usePostOrderMutation, useGetOrdersByUserQuery } from "../services/shopServices";
import { colors } from "../global/colors";
import uuid from 'react-native-uuid'

export default function Cart() {
  const { items: CartData, total } = useSelector((state) => state.cart.value);
  const { user } = useSelector((state) => state.auth.value);
  const [triggerPostOrder, result] = usePostOrderMutation();
  const { refetch } = useGetOrdersByUserQuery(user);

  const getCurrentDate = () => {
    const date = new Date();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const onConfirmOrder = async () => {
    try {
      const orderDate = getCurrentDate();
      await triggerPostOrder({
        id: uuid.v4(),
        items: CartData,
        user,
        total,
        date: orderDate
      }).unwrap();
      refetch();
    } catch (error) {
      console.error("Failed to confirm order: ", error);
    }
  };

  return (
    <View style={styles.container}>
      {CartData.length ?
        <>
          <FlatList
            data={CartData}
            renderItem={({ item }) => {
              return <CartItem item={item} />;
            }}
            keyExtractor={(product) => product.id}
          />

          <View style={styles.confirmOrderContainer}>
            <View style={styles.totalContainer}>
              <Text style={{ fontSize: 20, color: 'gray' }}>Total:</Text>
              {total &&
                <Text style={{ color: '#000000c5', fontWeight: '600', fontSize: 20 }}>${total}</Text>
              }
            </View>
            <TouchableOpacity onPress={onConfirmOrder} style={styles.confirmOrder}>
              <Text style={{ fontSize: 20, fontWeight: '500', color: 'white', }}>Confirm Order</Text>
            </TouchableOpacity>
          </View>
        </>
        : <Text style={{ fontSize: 20, fontWeight: '500' }}>No Products on Cart</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
  },
  confirmOrderContainer: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    flexDirection: "column",
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  confirmOrder: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    paddingVertical: 15,
    backgroundColor: colors.lightBlue,
    borderRadius: 6
  },
});
