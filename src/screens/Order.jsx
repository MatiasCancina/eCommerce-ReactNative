import { StyleSheet, View, FlatList, Text } from "react-native";

import OrderItem from "../components/OrderItem";
import { useGetOrdersByUserQuery } from "../services/shopServices";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Order = () => {
  const { user } = useSelector((state) => state.auth.value);
  const { data, isLoading } =
    useGetOrdersByUserQuery(user);
  const [orderData, setOrderData] = useState([])

  useEffect(() => {
    if (data) {
      setOrderData(data);
    }
  },
    [data])

  return (
    <View>
      {orderData.length ?
        <FlatList
          data={orderData}
          keyExtractor={(orderItem) => orderItem}
          renderItem={({ item }) => {
            return <OrderItem order={item} />;
          }}
        />
        :
        <Text style={{ fontSize: 20, fontWeight: '500' }}>
          No Orders Yet
        </Text>
      }
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
