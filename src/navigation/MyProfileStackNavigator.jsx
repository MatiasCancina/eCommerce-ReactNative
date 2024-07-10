import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyProfile from "../screens/MyProfile";
import ImageSelector from "../screens/ImageSelector";
import ListAddress from "../screens/ListAdress";
import LocationSelector from "../screens/LocationSelector";

const Stack = createNativeStackNavigator();

const MyProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ProfileScreen" component={MyProfile} />
      <Stack.Screen name="ImageSelectorScreen" component={ImageSelector} />
      <Stack.Screen name="ListAdressScreen" component={ListAddress} />
      <Stack.Screen
        name="LocationSelectorScreen"
        component={LocationSelector}
      />
    </Stack.Navigator>
  );
};

export default MyProfileStackNavigator;
