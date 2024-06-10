import { StyleSheet, View } from "react-native";
import Categories from "../components/Categories";
import Header from "../components/Header";
import ItemListCategory from "./ItemListCategory";
import { useState } from "react";
import ItemDetail from "./ItemDetail";

export default function Home() {
  const [categorySelected, setCategorySelected] = useState("");
  const [itemIdSelected, setItemIdSelected] = useState("");
  
  return (
    <View >
      {!categorySelected ? (
        <>
          <Header title={"Categories"} />
          <Categories setCategorySelected={setCategorySelected} />
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
              <Header title={'Detail'} />
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
