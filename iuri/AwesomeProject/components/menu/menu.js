import React, { useState } from "react";
import { Button, StyleSheet, View, Text, SafeAreaView, Pressable } from "react-native";

const menuUfc = () => {
  return (
    <View style={styles.menuBackground}>
        <SafeAreaView style={styles.divMenu}>
            <Pressable style={styles.btnWidth100}>
              <Text style={styles.textBtn}> Objetivo </Text>
            </Pressable>
        </SafeAreaView>

        <SafeAreaView style={styles.divMenuFlex}>
            <Pressable style={styles.buttonYellow} >
                <Text style={styles.textBtn}> Conheça a TEA </Text>
            </Pressable>
            <Pressable style={styles.buttonPurple} >
                <Text style={styles.textBtn}> Auxilio no tratamento </Text>
            </Pressable>
        </SafeAreaView>

        <SafeAreaView style={styles.divMenuFlex}>
            <Pressable style={styles.buttonRed} >
                <Text style={styles.textBtn}> Conheça os sinais da TEA </Text>
            </Pressable>
            <Pressable style={styles.buttonGreen}>
                <Text style={styles.textBtn}> Chat interativo </Text>
            </Pressable>
        </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
    divMenu: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: '#313f47',
      width: '100%',
      height: 60,
      padding: 10,
    },
    text: {
      color: '#9f9f9f',
      fontWeight: 'bold',
      fontSize: 30
    },
    buttonYellow: {
        width: '47%',
        height: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#f6d151',
        borderRadius: 10,
        marginVertical: 10,
        textAlign: "center"
    },
    buttonPurple: {
        width: '47%',
        height: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#d3c0e0',
        borderRadius: 10,
        marginVertical: 10,
        textAlign: "center",
    },
    buttonRed: {
        width: '47%',
        height: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#F46452',
        borderRadius: 10,
        marginVertical: 10,
        textAlign: "center",
    },
    buttonGreen: {
        width: '47%',
        height: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#40D4BD',
        borderRadius: 10,
        marginVertical: 10,
        textAlign: "center",
    },
    textBtn: {
        color: 'white',
        fontSize: 24,
        textAlign: "center",
    },
    menuBackground: {
        backgroundColor: '#cebdaa',
        height: '100%',
        padding: 15
    },
    btnWidth100: {
        width: '100%',
        height: 150,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#5695f6',
        borderRadius: 10,
        marginVertical: 10,
    },
    divMenuFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
  });

export default menuUfc;