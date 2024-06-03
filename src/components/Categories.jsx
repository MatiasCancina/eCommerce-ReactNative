import { FlatList, StyleSheet, Text, View } from "react-native";
import categories from "../data/categories.json";
import Category from "./Category";
import { colors } from "../global/colors";

export default function Categories() {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(category) => category}
        renderItem={({ item }) => <Category item={item} />}
        style={{paddingVertical:20}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingBottom: 200,
    backgroundColor: colors.brown100,
  },
});
