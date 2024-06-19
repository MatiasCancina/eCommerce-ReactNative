import { StyleSheet } from 'react-native';
import Navigator from './src/navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

const styles = StyleSheet.create({});
