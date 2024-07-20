import { StyleSheet, Text, View, ScrollView } from "react-native";
import { colors } from "../global/colors";

const RecentOrders = ({ orders }) => {
    return (
        <View style={styles.card}>
            <View style={styles.tableContainer}>
                <View style={styles.tableHeader}>
                    <Text style={[styles.tableHeaderText, styles.productColumn]}>UUID</Text>
                    <Text style={[styles.tableHeaderText, styles.quantityColumn]}>Date</Text>
                    <Text style={[styles.tableHeaderText, styles.priceColumn]}>Total</Text>
                </View>
                {orders.map((order) => {
                    const orderTotal = order.items.reduce(
                        (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
                        0
                    );
                    return (
                        <View style={styles.tableRow} key={order.id.toUpperCase()}>
                            <Text style={[styles.tableRowText, styles.productColumn, { fontSize: 10 }]}>#{order.id.toUpperCase()}</Text>
                            <Text style={[styles.tableRowText, styles.quantityColumn, { fontSize: 10 }]}>{order.date}</Text>
                            <Text style={[styles.tableRowText, styles.priceColumn, { color: colors.golden }]}>$ {orderTotal}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

export default RecentOrders;

const styles = StyleSheet.create({
    card: {
        paddingHorizontal: 10,
        flexDirection: "column",
    },
    tableContainer: {
        width: '100%',
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
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.marineBlue,
    },
    tableRowText: {
        fontSize: 14,
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
    },
    priceColumn: {
        flex: 1,
        textAlign: 'right',
    },
});
