import { Button, StyleSheet, View } from "react-native";
import Categories from "../components/Categories";

export default function Home({ navigation }) {
  const goUs = () => {
    navigation.navigate("Us");
  };

  return (
    <View style={{ height: "95%" }}>
      <Button onPress={() => goUs()} title="About Us" />
      <Categories navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});
