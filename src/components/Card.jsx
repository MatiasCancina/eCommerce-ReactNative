import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

export default function Card({ children, style }) {
    return (
        <View style={{...styles.container, ...style}}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.green700,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    }
})