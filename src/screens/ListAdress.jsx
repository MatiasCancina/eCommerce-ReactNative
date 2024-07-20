import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AddButton from "../components/AddButton";
import AdressItem from "../components/AdressItem";
import { useSelector } from "react-redux";
import { useGetLocationQuery } from "../services/shopServices";
import { colors } from "../global/colors";
import MapPreview from "../components/MapPreview";

const ListAddress = ({ navigation }) => {
  const { localId } = useSelector((state) => state.auth.value);
  const { data: location } = useGetLocationQuery(localId);

  return location ? (
    <>
      <AdressItem location={location} navigation={navigation} />
      <MapPreview location={location} />
    </>

  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>No location set</Text>
      <AddButton
        title="Set Location"
        onPress={() => navigation.navigate("LocationSelectorScreen")}
        style={{ backgroundColor: colors.lightBlue }}
        titleStyle={{ color: 'white' }}
      />
    </View>
  );
};

export default ListAddress;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    paddingVertical: 20,
    fontSize: 18,
  },
});
