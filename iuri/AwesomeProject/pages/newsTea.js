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
  Linking
} from 'react-native';

import HeaderCustom from '../components/headerCustom/headerCustom'
import Paragraph from '../components/paragraph/paragraph'
import redBackground from '../assets/images/redbackground.jpg'
import newsList from '../assets/json/newsList.json'

const newsTea = () => {
    return (
        <ScrollView>
            <HeaderCustom title="Tela de notícias" image={redBackground}/>
            <View>
                {newsList.map((item) => {
                    return (
                      <View key={item.title} style={styles.newContent}>
                        <Text style={styles.textTitle}>{item.title}</Text>
                        <Text style={styles.textDescription}>{item.description}</Text>
                        <Text style={styles.link} onPress={(test = item.link) => Linking.openURL(test.toString())}>Ler mais</Text>
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
    textTitle: {
        fontSize: 20,
    },
    textDescription: {
        fontSize: 18,
        margin: 10
    },
    newContent: {
        padding: 15
    },
    link: {
        color: 'blue'
    }
})

export default newsTea