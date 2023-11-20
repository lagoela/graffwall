import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';



export default function ButtonPlus({ size, color }) {
    return (
        <View style={styles.containerBtnPlus}>
            <Entypo name="plus" size={size} color={color} />
        </View>
    )
}

const styles = StyleSheet.create({
    containerBtnPlus: {
        backgroundColor: 'white',
        borderRadius: 40,
        height: 80,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        elevation: 9
    }
})