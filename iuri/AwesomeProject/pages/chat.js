import React, { useState, useEffect } from 'react'
import { Button, StyleSheet, View, Text, SafeAreaView, Pressable, Image, ScrollView } from "react-native";
import QuestionLists from '../assets/json/questions.json'

const Chat = () => {
    const [count, setCount] = useState(0)
    const [question, setQuestion] = useState(null)
    const [qttQuestion, setQttQuestion] = useState(0)
    const [showMessage, setHideMessage] = useState(true)
    const [messageTEA, setMessageTEA] = useState('rqwerqwer')

    function handleAnswer() {
        setHideMessage(false)
    }

    useEffect(() => {
        if (count > 2 && count < 5) {
            setMessageTEA('BAIXO RISCO PARA AUTISMO')
        }
        else if (count > 5 && count < 8) {
            setMessageTEA('RISCO PARA AUTISMO')
        }
        else if (count > 8 && count < 19) {
            setMessageTEA('ALTO RISCO PARA AUTISMO')
        } else if (count < 2) {
            setMessageTEA('RISCO QUASE ZERO')
        }
    }, [count])

    useEffect(() => {
        if (qttQuestion < QuestionLists.length) {
            setQuestion(QuestionLists[qttQuestion].question)
        } else {
            handleAnswer()
        }
    },[qttQuestion])

     return (
            <SafeAreaView style={styles.contentChat}>
                { showMessage ?
                    (
                    <View style={styles.contentChat}>
                        <View style={styles.cardQuestion}>
                            <Text style={styles.textQuestion}> { question } </Text>
                        </View>
                        <View style={styles.contentBtn}>
                            <View style={styles.btnChat}>
                                <Button title="SIM" onPress={() => {
                                    setCount(count+1),
                                    setQttQuestion(qttQuestion+1)
                                }}/>
                            </View>
                            <View style={styles.btnChat}>
                                <Button title="NÃO" onPress={() => {
                                    setQttQuestion(qttQuestion+1)
                                }}/>
                            </View>
                        </View>
                    </View>)
                    :
                    (<View style={styles.messageWarn}>
                        <Text style={styles.textWarn}> {messageTEA} </Text>
                        <Text style={styles.warn}>
                            ⦁	ATENÇÃO! O teste realizado não é um laudo médico. Seja qual for o resultado mostrado pelo diagnóstico do TEA, aconselhamos, sempre, buscar um especialista.
                        </Text>
                        <View style={styles.contentScaleTEA}>
                            <Text style={styles.scaleTEA}>ESCALAS DO TEA</Text>
                            <Text style={styles.scaleTEAItem}>Autismo Nível 1: menor necessidade de apoio no dia a dia.</Text>
                            <Text style={styles.scaleTEAItem}>Autismo Nível 2: popularmente conhecido como autismo moderado, nesse nível a pessoa precisa de um pouco mais de apoio em sua rotina.</Text>
                            <Text style={styles.scaleTEAItem}>Autismo Nível 3: conhecido como autismo severo, a pessoa precisa de mais apoio para as atividades da vida diária.</Text>
                        </View>
                    </View>)
                }
            </SafeAreaView>
        )
    }

const styles = StyleSheet.create({
    contentChat: {
        backgroundColor: '#F0E5E1',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'

    },
    cardQuestion: {
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        borderRadius: 10
    },
    textQuestion: {
        fontSize: 20,
    },
    btnChat: {
        marginHorizontal: 10,
        marginVertical: 5,
        width: 150
    },
    contentBtn: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginBottom: 30
    },
    messageWarn: {
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        borderRadius: 10
    },
    textWarn: {
        fontSize: 24,
        height: 300,
        display: 'flex',
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    warn: {
        fontSize: 14,
        color: '#EEB902'
    },
    scaleTEA: {
        fontSize: 13,
        color: 'black'
    },
    scaleTEAItem: {
        fontSize: 12
    },
    contentScaleTEA: {
        paddingVertical: 20
    }
})

export default Chat