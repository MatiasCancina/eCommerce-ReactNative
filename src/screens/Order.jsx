import { StyleSheet, View, FlatList, Text } from "react-native";

import OrderItem from "../components/OrderItem";
import { useGetOrdersByUserQuery } from "../services/shopServices";
import { useSelector } from "react-redux";

const Order = () => {
  const { user } = useSelector((state) => state.auth.value);
  const { data, isLoading } = useGetOrdersByUserQuery(user);

  return (
    <View>
      {isLoading ? (
        <Text style={{ fontSize: 20, fontWeight: '500' }}>Loading...</Text>
      ) : data.length ? (
        <FlatList
          data={data}
          keyExtractor={(orderItem) => orderItem.id.toString()}
          renderItem={({ item }) => <OrderItem order={item} />}
        />
      ) : (
        <Text style={{ fontSize: 20, fontWeight: '500' }}>No Orders Yet</Text>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
