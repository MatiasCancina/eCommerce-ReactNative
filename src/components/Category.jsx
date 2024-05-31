import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

export default function Category({ item }) {
    return (
        <Card style={styles.cardContainer}>
            <Text style={styles.title}>{item}</Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 30,
        marginVertical: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'flex-start '
    },
    text: { fontSize: 20 }
})