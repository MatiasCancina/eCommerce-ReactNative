import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyProfile from "../screens/MyProfile";
import ImageSelector from "../screens/ImageSelector";

const Stack = createNativeStackNavigator();

const MyProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ProfileScreen" component={MyProfile}></Stack.Screen>
      <Stack.Screen
        name="ImageSelectorScreen"
        component={ImageSelector}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MyProfileStackNavigator;
