import { FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import products from "../data/products.json";
import { colors } from "../global/colors";
import Search from "../components/Search";
import { capitalizeFirstLetter } from "../global/capitalizeFirstLetter";
import ProductItem from "../components/ProductItem";
export default function ItemListCategory({
  categorySelected,
  setCategorySelected,
}) {
  const [keyword, setKeyword] = useState("");
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [error, setError] = useState("");

  console.log(
    categorySelected,
    productsFiltered.map((p) => p.title)
  );

  useEffect(() => {
    const regex = /\d/;
    const Digits = regex.test(keyword);
    console.log(Digits);

    if (Digits) {
      setError("Don´t use digits");
      return;
    }

    const preFilteredProducts = products.filter(
      (p) => p.category === categorySelected
    );

    const filterProducts = preFilteredProducts.filter((product) =>
      product.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
    );

    setProductsFiltered(filterProducts);
  }, [keyword, categorySelected]);

  return (
    <View style={styles.container}>
      <Search onSearch={setKeyword} goBack={() => setCategorySelected("")} />
      {error ? (
        <Text style={{justifyContent:'center'}} >{error}</Text>
      ) : (
        <FlatList
          data={productsFiltered}
          renderItem={({ item }) => <ProductItem product={item} />}
          keyExtractor={(product) => product.id}
        />
      )}
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
