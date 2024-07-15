import { StyleSheet } from 'react-native';
import Navigator from './src/navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/store';
import { getSession, initSQLiteDB } from './src/persistance';

(async () => {
  try {
    const response = await initSQLiteDB()
    console.log({ ResponseCreatingDB: response });
    console.log('DB Initialized');

  } catch (error) {
    console.log({ ErrorCreatingDB: error });
  }
})()

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

const styles = StyleSheet.create({});
