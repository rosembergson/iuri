import React, { useState } from "react";
import type {Node} from 'react';
import { Button, StyleSheet, View, Text, SafeAreaView, Pressable, Image, ScrollView} from "react-native";
import Logo from '../assets/images/tea.png'

const Home = props => {
    return (
        <ScrollView style={{height: '100%'}}>
          <View style={styles.container}>
              <Image
                  style={styles.imgSize}
                  source={Logo}
              />
              <Text style={styles.text}>
                  UFC TEA
              </Text>
          </View>
          <View style={styles.menuBackground}>
              <SafeAreaView style={styles.divMenu}>
                  <Pressable style={styles.btnWidth100} onPress={() => {props.navigation.navigate('Goal')}}>
                    <Text style={styles.textBtn}> Objetivo </Text>
                  </Pressable>
              </SafeAreaView>

              <SafeAreaView style={styles.divMenuFlex}>
                  <Pressable style={styles.buttonYellow} onPress={() => {props.navigation.navigate('MeetTea')}}>
                      <Text style={styles.textBtn}> Conheça a TEA </Text>
                  </Pressable>
                  <Pressable style={styles.buttonRed} onPress={() => {props.navigation.navigate('newsTea')}}>
                      <Text style={styles.textBtn}> Tela de notícias </Text>
                  </Pressable>
              </SafeAreaView>

              <SafeAreaView style={styles.divMenuFlex}>

                  <Pressable style={styles.btnWidth100Green} onPress={() => {props.navigation.navigate('Chat')}}>
                      <Text style={styles.textBtn}> Chat interativo </Text>
                  </Pressable>
              </SafeAreaView>
          </View>
        </ScrollView>
    );
}

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
    btnWidth100Green: {
        width: '100%',
        height: 150,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',

        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: '#40D4BD',

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
    },
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

export default Home