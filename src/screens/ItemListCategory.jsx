import { FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { colors } from "../global/colors";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem";
import { useGetProductsByCategoryQuery } from "../services/shopServices";
import { useSelector } from "react-redux";

export default function ItemListCategory({ navigation, route }) {
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");

  const categorySelected = useSelector(state => state.shop.value.categorySelected);

  const {
    data: productsFetched,
    isLoading,
    error: errorFetched,
  } = useGetProductsByCategoryQuery(categorySelected);
  
  useEffect(() => {
    const regexDigits = /\d/;
    const hasDigits = regexDigits.test(keyword);

    if (hasDigits) {
      setError("Don´t use digits");
      return;
    }

    const regexThreeOrMoreCharacters = /[a-zA-Z]{3,}/;
    const hasThreeOrMoreChr = regexThreeOrMoreCharacters.test(keyword);

    if (!hasThreeOrMoreChr && keyword.length) {
      setError("Type 3 or more characters");
      return;
    }
  }, [keyword, categorySelected, productsFetched, isLoading]);

  return (
    <View style={styles.container}>
      <Search onSearch={setKeyword} goBack={() => navigation.goBack()} />

      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={productsFetched}
          renderItem={({ item }) => (
            <ProductItem product={item} navigation={navigation} />
          )}
          keyExtractor={(product) => product.id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    height: '100%',
  },
  error: {
    fontSize: 20,
    color: 'red',
    fontWeight: "500",
    textAlign: "center",
    marginTop: 20,
  },
});
