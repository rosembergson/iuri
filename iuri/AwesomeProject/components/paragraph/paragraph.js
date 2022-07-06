import React, { useState } from "react";
import { Button, StyleSheet, View, Text, SafeAreaView, Pressable } from "react-native";

const Paragraph = () => {
    return (
        <View style={styles.ParagraphContent}>
          <Text style={styles.textParagraph}>
            O projeto UFC TEA foi iniciado em 2019, por mim, Iuri Breno, e pela minha orientadora Paulyne Jucá. O intuito do projeto, neste primeiro estudo, era a criação de um jogo para crianças que possuem o Transtorno do Espectro Autista. Agora, em 2022, foi desenvolvido uma segunda versão do aplicativo, cujo objetivo nesse momento, é passarmos algumas informações para nossos usuários. Essas informações podem ser divididas em alguns tópicos, como: Notícias sobre o assunto, alguns conceitos que envolvem o Transtorno e como chegar ou detectar se um determinado indivíduo possui o Transtorno. Além do mais, o aplicativo conta com um chat interativo, onde o objetivo deste chat, é o usuário ter uma base de como se comporta um tal usuário em um determinado nível de Transtorno. Este nível pode ser determinado ou caracterizado através de algumas perguntas, onde as mesmas foram desenvolvidas através de pesquisas e estudos na área.
          </Text>
        </View>
    )
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

})

export default Paragraph