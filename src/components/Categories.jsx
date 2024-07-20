import { FlatList, StyleSheet, Text, View } from "react-native";
import Category from "./Category";
import { colors } from "../global/colors";
import { useGetCategoriesQuery } from "../services/shopServices";

export default function Categories({ navigation, route }) {
  const { data: categories } = useGetCategoriesQuery()

  return (
    <View style={styles.container}>
      {categories ?
        <FlatList
          showsVerticalScrollIndicator={false}
          data={categories}
          keyExtractor={(category) => category.label}
          renderItem={({ item }) => (
            <Category category={item} navigation={navigation} />
          )}
          style={{ width: "100%" }}
        />
        :
        <Text style={{ fontSize: 20, fontWeight: '500' }}>Loading...</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.lightGray,
  },
});
