import { FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import products from "../data/products.json";
import { colors } from "../global/colors";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem";
export default function ItemListCategory({
  navigation,
  route
}) {
  const [keyword, setKeyword] = useState("");
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [error, setError] = useState("");

  const {category: categorySelected} = route.params

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

    const preFilteredProducts = products.filter(
      (p) => p.category === categorySelected.label
    );

    const filterProducts = preFilteredProducts.filter((product) =>
      product.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
    );

    setProductsFiltered(filterProducts);
    setError("");
  }, [keyword, categorySelected]);

  return (
    <View style={styles.container}>
      <Search onSearch={setKeyword} goBack={() => navigation.goBack()} />

      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={productsFiltered}
          renderItem={({ item }) => (
            <ProductItem product={item} navigation={navigation} />
          )}
          keyExtractor={(product) => product.id.toString()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.brown100,
  },
  error: {
    fontSize: 20,
    color: colors.brown600,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 20,
  },
});
