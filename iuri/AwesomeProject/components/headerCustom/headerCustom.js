import React, { useState } from "react";
import { ImageBackground, Button, StyleSheet, View, Text, SafeAreaView, Pressable } from "react-native";

const HeaderCustom = ({ title, image }) => {
    return (
        <View>
            <ImageBackground source={image} resizeMode="cover" style={styles.headerCustomContent}>
                <Text style={styles.textHeaderCustom}> { title } </Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    headerCustomContent: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        height: 130,
        color: 'white'
    },
    textHeaderCustom: {
        color: "white",
        fontSize: 30,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        width:'100%',
    },

})

export default HeaderCustom