import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

export default function Header({ title }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green300,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop:50
    },
    title: {
        fontSize: 30,
        marginTop:20
    }
})