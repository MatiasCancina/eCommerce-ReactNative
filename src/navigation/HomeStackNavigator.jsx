import { StyleSheet } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categories from "../components/Categories";
import ItemListCategory from "../screens/ItemListCategory";
import ItemDetail from "../screens/ItemDetail";
import Us from "../screens/Us";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="ItemListCategory" component={ItemListCategory} />
      <Stack.Screen name="ItemDetail" component={ItemDetail} />
      <Stack.Screen name="Us" component={Us} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
