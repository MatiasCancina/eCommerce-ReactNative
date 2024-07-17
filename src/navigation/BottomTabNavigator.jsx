import { StyleSheet, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeStackNavigator";
import CartStackNavigator from "./CartStackNavigator";
import OrdersStackNavigator from "./OrdersStackNavigator";
import Header from "../components/Header";
import { colors } from "../global/colors";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MyProfileStackNavigator from "./MyProfileStackNavigator";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => {
          return <Header title={route.name} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen
        name="Shop"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5 name="store" size={24} color={focused ? colors.golden : 'white'} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5 name="shopping-cart" size={24} color={focused ? colors.golden : 'white'} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5 name="receipt" size={24} color={focused ? colors.golden : 'white'} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={MyProfileStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5 name="user-alt" size={24} color={focused ? colors.golden : 'white'} />
              </View>
            );
          },
        }}
      />
      
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.marineBlue,
    height: 60,
  },
});
