import { FlatList, StyleSheet, View } from "react-native";
import Category from "./Category";
import { colors } from "../global/colors";
import { categories } from "../data/categories";

export default function Categories({ navigation, route }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(category) => category.label}
        renderItem={({ item }) => (
          <Category category={item} navigation={navigation} />
        )}
        style={{ width: "100%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingBottom: 67,
    backgroundColor: colors.brown100,
  },
});
