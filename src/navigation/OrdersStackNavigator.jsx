import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Order from "../screens/Order";

const Stack = createNativeStackNavigator();

export default function OrdersStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="OrdersScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="OrdersScreen" component={Order} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
