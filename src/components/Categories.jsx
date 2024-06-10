import { FlatList, StyleSheet, View } from "react-native";
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
        style={{width:'100%'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingBottom: 200,
    backgroundColor: colors.brown100,
    // flex: 1,
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    // padding:10
  },
});
