import { FlatList, StyleSheet, Text, View } from "react-native";
import categories from "../data/categories.json";
import Category from "./Category";
import { colors } from "../global/colors";

export default function Categories({setCategorySelected}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(category) => category}
        renderItem={({ item }) => <Category category={item} selectCategory={setCategorySelected}/>}
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
