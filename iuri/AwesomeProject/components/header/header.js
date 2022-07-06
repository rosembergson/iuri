import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Button } from "@react-native-material/core";
import Logo from '../../assets/images/tea.png'

const test = () => {
  return (
    <View style={styles.container}>
        <Image
            style={styles.imgSize}
            source={Logo}
        />
        <Text style={styles.text}>
            UFC TEA
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'white',
      width: '100%',
      height: 100,
      padding: 10
    },
    text: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 30,
      fontFamily: 'Roboto'
    },
    imgSize: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 0,
        left: 30
    }
  });

export default test;