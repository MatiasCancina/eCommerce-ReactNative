import { Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { colors } from "../global/colors";

const AddressItem = ({ location, navigation }) => {

    const onChangeLocation = () => {
        navigation.navigate('LocationSelectorScreen')
    }

    return (
      <View style={styles.card} onPress={() => {}}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{location.address}</Text>
        </View>
        <Pressable onPress={onChangeLocation}>
          <Entypo name="location" size={30} color="white">
            <Text style={styles.text2}>Change</Text>
          </Entypo>
        </Pressable>
      </View>
    );
};

export default AddressItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colors.esmeraldGreen,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontSize: 17,
        color: 'lightGray',
    },
    text2: {
        fontSize: 19,
        color: 'lightGray',
        padding: 8,
    },
});