import { Button, StyleSheet, View } from "react-native";
import Categories from "../components/Categories";

export default function Home({ navigation }) {
  const info = {
    id: 1243,
    total: 300,
    medidas: { peso: 45, alto: 453 },
  };

  const goUs = () => {
    navigation.navigate("Us", info);
  };

  return (
    <View>
      <Categories navigation={navigation}/>
      <Button onPress={() => goUs()} title="Go Us" />
    </View>
  );
}

const styles = StyleSheet.create({});
