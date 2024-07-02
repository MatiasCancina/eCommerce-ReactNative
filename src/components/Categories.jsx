import { FlatList, StyleSheet, View } from "react-native";
import Category from "./Category";
import { colors } from "../global/colors";
import { useGetCategoriesQuery } from "../services/shopServices";

export default function Categories({ navigation, route }) {
  const {data: categories} = useGetCategoriesQuery()
  
  return (
    <View style={styles.container}>
      <FlatList
      showsVerticalScrollIndicator={false}
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
    // height: '95%',
    // paddingBottom: 33,
    backgroundColor: colors.brown100,
  },
});
