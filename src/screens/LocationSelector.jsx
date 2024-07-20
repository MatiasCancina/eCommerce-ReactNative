import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../global/colors";
import AddButton from "../components/AddButton";
import MapPreview from "../components/MapPreview";

import * as Location from "expo-location";

import { googleMapsApiKey } from "../database/googleMaps";
import { usePostLocationMutation } from "../services/shopServices";
import { useSelector } from "react-redux";

const LocationSelector = ({ navigation }) => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [address, setAddres] = useState("");
  const [error, setError] = useState("");

  const [triggerPostUserLocation, result] = usePostLocationMutation();
  const { localId } = useSelector((state) => state.auth.value);

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          setError("Permission to access location was denied");
          return;
        }
        if (status === "granted") {
          let location = await Location.getCurrentPositionAsync({});
          setLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (location.latitude) {
          const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleMapsApiKey}`;

          const response = await fetch(url_reverse_geocode);

          const data = await response.json();

          setAddres(data.results[0].formatted_address);
        }
      } catch (error) { }
    })();
  }, [location]);

  const onConfirmAddress = () => {
    const date = new Date();

    triggerPostUserLocation({
      location: {
        latitude: location.latitude,
        longitude: location.longitude,
        address: address,
        updatedAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
      },
      localId: localId,
    });

    navigation.goBack()
  };

  return (
    <View style={styles.container}>
      {location ? (
        <>
          <MapPreview location={location} />
          <View>
            <Text style={styles.text}>My Location</Text>
            <Text style={styles.address}>{address}</Text>

            <View style={{ marginVertical: 10, marginHorizontal: 25, justifyContent: 'space-between', flexDirection: 'row' }}>
              <View>
                <Text style={styles.cords}>Latitude</Text>
                <Text style={styles.cordsNum}>{location.latitude}</Text>
              </View>
              <View>
                <Text style={styles.cords}>Longitude</Text>
                <Text style={styles.cordsNum}>{location.longitude}</Text>

              </View>
            </View>
          </View>
          <AddButton onPress={onConfirmAddress} title="Confirm Address" style={{ marginTop: 20, backgroundColor: colors.marineBlue, borderWidth: 0 }} titleStyle={{ color: 'white', fontSize: 17 }} />
        </>
      ) : (
        <>
          <View style={styles.noLocationContainer}>
            <Text>{error}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default LocationSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  text: {
    paddingTop: 20,
    fontSize: 18,
    fontWeight: '600'
  },
  address: {
    marginTop: 10,
    fontSize: 17,
    color: 'gray'
  },
  cords: {
    color: 'gray',
    fontWeight: '600',
    fontSize: 15
  },
  cordsNum: {
    fontSize: 17,
  },
  noLocationContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: colors.green300,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
