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
import purpleBackground from '../assets/images/purplebackground.jpg'

const Auxiliarytreatment = () => {
    return (
        <SafeAreaView>
            <HeaderCustom title="Tratamento auxiliar" image={purpleBackground}/>
            <Paragraph />
        </SafeAreaView>
    );
}

export default Auxiliarytreatment