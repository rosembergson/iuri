import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import HeaderCustom from '../components/headerCustom/headerCustom'
import Paragraph from '../components/paragraph/paragraph'
import yellowBackground from '../assets/images/yellow-background.jpg'
import meetTeaList from '../assets/json/meetTEAList.json'

const MeetTea = () => {
    return (
        <ScrollView>
            <HeaderCustom title="Conheça a TEA" image={yellowBackground}/>
            <View style={styles.ParagraphContent}>
                {meetTeaList.map((item) => {
                    return (
                      <View style={styles.itemContent}>
                        <Text style={styles.item}>{item.title}</Text>
                        <Text style={styles.itemMargin}>{item.description}</Text>
                      </View>
                    );
                })}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    ParagraphContent: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 15,
        color: 'white',
        borderRadius: 20,
        marginTop: -20,
        backgroundColor: 'white',
        height: '100%',
        fontFamily: 'Roboto'
    },
    textParagraph: {
        color: 'black',
        fontSize: 20,
    },
    item: {
        fontSize: 20
    },
    itemContent: {
        padding: 10
    },
    itemMargin: {
        fontSize: 18,
        margin: 10
    }
})

export default MeetTea