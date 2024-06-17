import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Orders from "../screens/Orders";

const Stack = createNativeStackNavigator();

export default function OrdersStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="OrdersScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="OrdersScreen" component={Orders} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
