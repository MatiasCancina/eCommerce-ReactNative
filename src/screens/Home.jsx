import { StyleSheet, View } from "react-native";
import Categories from "../components/Categories";
import Header from "../components/Header";
import ItemListCategory from "./ItemListCategory";
import { useState } from "react";

export default function Home() {
  const [categorySelected, setCategorySelected] = useState("");

  return (
    <View style={{ width: "100%" }}>
      {!categorySelected ? (
        <>
          <Header title={"Categories"} />
          <Categories setCategorySelected={setCategorySelected} />
        </>
      ) : (
        <>
          <Header title={categorySelected.toUpperCase()} />
          <ItemListCategory
            setCategorySelected={setCategorySelected}
            categorySelected={categorySelected}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
