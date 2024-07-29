import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Us({ navigation, route }) {r
  const goHome = () => {
    navigation.navigate("Home");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>About Us</Text>
          <Text style={styles.paragraph}>
            We are an online store offering a wide variety of products, from perfumes and mobile phones to clothing, food, and vehicles. We pride ourselves on providing our customers with an exceptional shopping experience and top-notch customer service.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.subTitle}>Our Mission</Text>
          <Text style={styles.paragraph}>
            Our mission is to be the trusted online store for our customers by offering a wide selection of high-quality products at competitive prices. We strive to provide a seamless shopping experience and exceptional customer service.
          </Text>
          <Text style={styles.subTitle}>Our Values</Text>
          <Text style={styles.paragraph}>
            We are guided by the values of integrity, excellence, and social responsibility. We are committed to offering quality products, treating our customers and employees with respect, and making decisions that consider the impact on the community and the environment.
          </Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.textContainer}>
          <Text style={styles.subTitle}>Our History</Text>
          <Text style={styles.paragraph}>
            Our online store was founded in 2024 with the goal of providing our customers with a more convenient and personalized shopping experience. Since then, we have consistently grown, expanding our product selection and improving our services to meet the evolving needs of our customers.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.subTitle}>Contact and Information</Text>
          <Text style={styles.paragraph}>
            You can reach us via email at info@onlinestore.com or by calling +1 (555) 123-4567.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  textContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
});