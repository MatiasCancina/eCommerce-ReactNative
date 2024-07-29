import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";

const OrderItem = ({ order }) => {
  const total = order.items.reduce(
    (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
    0
  );

  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={[styles.text, { fontSize: 17, fontWeight: '800', color: colors.lightBlue }]}> #{order.id.toUpperCase()} </Text>
        <Text style={[styles.text, { fontWeight: '700', color: colors.marineBlue, marginTop: 6 }]}>{order.date} </Text>
      </View>
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={[styles.tableHeaderText, styles.productColumn]}>Product</Text>
          <Text style={[styles.tableHeaderText, styles.quantityColumn]}>Quantity</Text>
          <Text style={[styles.tableHeaderText, styles.priceColumn]}>Price</Text>
        </View>
        {order.items.map((item) => (
          <View style={styles.tableRow} key={item.id}>
            <Text style={[styles.tableRowText, styles.productColumn]}>{item.title}</Text>
            <Text style={[styles.tableRowText, styles.quantityColumn]}>{item.quantity}</Text>
            <Text style={[styles.tableRowText, styles.priceColumn, { color: colors.golden }]}>$ {item.price}</Text>
          </View>
        ))}
        <View style={styles.tableFooter}>
          <Text style={styles.tableFooterText}>Total:</Text>
          <Text style={styles.tableFooterText}>$ {total}</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.pastelBlue,
    padding: 10,
    margin: 10,
    borderColor: colors.marineBlue,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  textContainer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text2: {
    fontSize: 19,
    color: "gray",
  },
  tableContainer: {
    width: '100%',
    marginTop: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.marineBlue,
  },
  tableHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.marineBlue,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.marineBlue,
  },
  tableRowText: {
    fontSize: 13,
    color: colors.marineBlue,
  },
  tableFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  tableFooterText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.golden,
  },
  productColumn: {
    flex: 4,
    textAlign: 'left',
  },
  quantityColumn: {
    flex: 1,
    textAlign: 'center',
    fontSize: 13
  },
  priceColumn: {
    flex: 1,
    textAlign: 'right',
  },
});
