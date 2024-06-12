import { Button, StyleSheet, View } from "react-native";
import Categories from "../components/Categories";
import Header from "../components/Header";
import ItemListCategory from "./ItemListCategory";
import { useState } from "react";
import ItemDetail from "./ItemDetail";

export default function Home({ navigation }) {
  const [categorySelected, setCategorySelected] = useState("");
  const [itemIdSelected, setItemIdSelected] = useState("");

  const info = {
    id: 1243,
    total: 300,
    medidas: { peso: 45, alto: 453 },
  };

  const goUs = () => {
    navigation.navigate("Us", info);
  };

  return (
    <View>
      {!categorySelected ? (
        <>
          <Button onPress={() => goUs()} title="Go Us" />
          <Categories
            setCategorySelected={setCategorySelected}
            navigation={navigation}
          />
        </>
      ) : (
        <>
          {!itemIdSelected ? (
            <>
              <Header title={categorySelected.toUpperCase()} />
              <ItemListCategory
                categorySelected={categorySelected}
                setCategorySelected={setCategorySelected}
                setItemIdSelected={setItemIdSelected}
              />
            </>
          ) : (
            <>
              <Header title={"Detail"} />
              <ItemDetail
                idSelected={itemIdSelected}
                setProductSelected={setItemIdSelected}
              />
            </>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
