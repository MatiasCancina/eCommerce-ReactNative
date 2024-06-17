import { StyleSheet } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/Cart";

const Stack = createNativeStackNavigator();

export default function CartStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="CartScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="CartScreen" component={Cart} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
