import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./HomeStackNavigator";
import BottomTabNavigator from "./BottomTabNavigator";

export default function Navigator() {
  return (
    <NavigationContainer>
      {/* <HomeStackNavigator /> */}
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
