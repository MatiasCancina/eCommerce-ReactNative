import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/colors";
import { useDispatch, useSelector } from "react-redux";
import { useGetOrdersByUserQuery, useGetProfileImageQuery } from "../services/shopServices";
import AddButton from "../components/AddButton";
import { clearUser } from "../features/UserSlice";
import { truncateSessionTable } from "../persistance";
import RecentOrders from "../components/RecentOrders";

export default function MyProfile({ navigation }) {
  const dispatch = useDispatch();
  const { imageCamera, localId, user } = useSelector((state) => state.auth.value);
  const defaultImageRoute = "../../assets/user.png";
  const { data: imageFromBase } = useGetProfileImageQuery(localId);
  const { data: orders, isLoading } = useGetOrdersByUserQuery(user);

  const recentOrders = !isLoading && orders ? orders.slice(-3) : [];

  const launchCamera = async () => {
    navigation.navigate("ImageSelectorScreen");
  };

  const launchLocation = async () => {
    navigation.navigate("ListAdressScreen");
  };

  const logOut = async () => {
    try {
      const response = await truncateSessionTable();
      console.log(response);
      dispatch(clearUser());
    } catch (error) {
      console.log({ ErrorSignOutDB: error });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {imageFromBase || imageCamera ? (
          <Image
            source={{ uri: imageFromBase?.image || imageCamera }}
            style={styles.img}
            resizeMode="cover"
          />
        ) : (
          <Image
            style={styles.img}
            resizeMode="cover"
            source={require(defaultImageRoute)}
          />
        )}
        <View style={{ bottom: 60, justifyContent: "center", alignItems: 'center', flexDirection: 'column', width: '90%', borderBottomWidth: 1, borderBottomColor: 'white' }}>
          <View style={{ flexDirection: 'row', marginBottom: 30 }}>
            <Text style={[styles.email, { fontWeight: '600' }]}>Email: </Text>
            <Text style={styles.email}>{user}</Text>
          </View>
          <View style={{ flexDirection: 'column', gap: 8, marginBottom: 20 }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <AddButton
                onPress={launchCamera}
                title={
                  imageFromBase || imageCamera
                    ? "Edit Photo"
                    : "Add Photo"
                }
              />
              <AddButton title="My Address" onPress={launchLocation} />
            </View>
            <AddButton title="Log Out" onPress={logOut} style={{ backgroundColor: '#ff0000d8', borderWidth: 0 }} titleStyle={{ color: 'white' }} />
          </View>
        </View>
        <View style={{ bottom: 40, width: '90%', backgroundColor: 'white', borderRadius: 5, padding: 10 }}>
          <Text style={{ fontSize: 27, fontWeight: '700', color: colors.marineBlue }}>Recent Orders</Text>
          <View>
            {isLoading ? (
              <Text style={{ fontSize: 20, fontWeight: '500' }}>Loading...</Text>
            ) : recentOrders.length ? (
              <RecentOrders orders={recentOrders} />
            ) : (
              <Text style={{ fontSize: 20, fontWeight: '500' }}>No Orders Yet</Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  innerContainer: {
    marginTop: '30%',
    backgroundColor: colors.lightBlue,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  img: {
    height: 150,
    width: 150,
    position: 'relative',
    top: '10%',
    borderRadius: 75,
    transform: [{ translateY: -140 }],
  },
  email: {
    color: 'white',
    fontSize: 17
  },
});
