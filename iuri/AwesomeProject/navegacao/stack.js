import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/homepage'
import Goal from '../pages/goal'
import newsTea from '../pages/newsTea'
import Meettea from '../pages/meettea'
import AuxiliaryTreatment from '../pages/auxiliarytreatment'
import Chat from '../pages/chat'

const Stack = createNativeStackNavigator();

const StackPage = props => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ title: 'Homepage'}}/>
            <Stack.Screen name="Goal" component={Goal} options={{ title: 'Objetivo'}}/>
            <Stack.Screen name="newsTea" component={newsTea} options={{ title: 'Tela de notícias'}}/>
            <Stack.Screen name="MeetTea" component={Meettea} options={{ title: 'Conheça TEA'}}/>
            <Stack.Screen name="AuxiliaryTreatment" component={AuxiliaryTreatment} options={{ title: 'Tratamento Auxiliar'}}/>
            <Stack.Screen name="Chat" component={Chat} options={{ title: 'Chat interativo'}}/>
        </Stack.Navigator>
    )
}

export default StackPage