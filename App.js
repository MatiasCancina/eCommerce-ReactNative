import Home from './src/screens/Home';
import { colors } from './src/global/colors';
import { View, StyleSheet } from 'react-native';
import ItemListCategory from './src/screens/ItemListCategory';

export default function App() {
  return (
    <View style={styles.container} >
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.brown100,
    alignItems: 'center',
  },
});
