import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors } from './src/global/colors';
import { capitalizeFirstLetter } from './src/global/capitalizeFirstLetter';

import Home from './src/screens/Home';
import Us from './src/screens/Us';
import Categories from './src/components/Categories';
import ItemListCategory from './src/screens/ItemListCategory';
import ItemDetail from './src/screens/ItemDetail';
import Header from './src/components/Header';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={({ route }) => ({
        header: () => {
          return (
            <Header title={
              route.name === 'Home'
                ? 'Categories'
                : route.name === 'ItemListCategory'
                  ? capitalizeFirstLetter(route.params.category.label)
                  : 'Detail'} />
          )
        }
      })}>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Categories',
            headerStyle: {
              backgroundColor: colors.green100
            },
            headerTintColor: colors.brown600,
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }} />
        <Stack.Screen name='Categories' component={Categories} />
        <Stack.Screen name='ItemListCategory' component={ItemListCategory} />
        <Stack.Screen name='ItemDetail' component={ItemDetail} />
        <Stack.Screen name='Us' component={Us} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({});
