import React, { useState } from 'react'
import { View, 
        Image, 
        TouchableOpacity, 
        Text, 
        StyleSheet, 
        ScrollView,
        SafeAreaView
    } from 'react-native'
import { IC_RED_POKEBALL as RedPokeball } from '../assets/index'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = ({ navigation }) => {

    const [pokeballs, setPokeballs] = useState(0)

    const getRandomPokeballs = () => {
        let result = Math.floor(Math.random() * 10) + 1

        setPokeballs(result)
    }

    const navigateToPokeballPage = () => {
        navigation.push('OpenPokeballs')
    }
    
    const styles = StyleSheet.create({
        button: {
            backgroundColor: 'red',
            padding: 16,
            alignContent: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            marginBottom: 8
        },

        buttonContent: {
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold'
        },

        introductionParagraph: {
            marginBottom: 32,
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center'
        },

        containerView: {
            margin: 16,
            padding: 16,
            backgroundColor: 'white',
            borderColor: 'lightgray',
            borderWidth: 2,
            borderRadius: 10,
        },

        pokeBall: {
            width: 100,
            height: 100,
            marginBottom: 16
        },

        viewPokeballWrapper: {
            marginTop: 16
        },

        congratulationsMessage: {
            fontSize: 18, 
            fontWeight: 'normal', 
            textAlign: 'center',
            marginBottom: 16
        }
    })

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={ styles.containerView }>
                    <Text style={ styles.introductionParagraph }>
                        Hello there, {'\n'}
                        <Text style={{ fontSize: 18, fontWeight: 'normal' }}>
                            press the button below to get free pokeballs :D
                        </Text>
                    </Text>
                    
                    {
                        pokeballs > 0 ? 
                        <View style={ styles.viewPokeballWrapper }>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={ RedPokeball } style={ styles.pokeBall }/>
                            </View>
                            <Text style={ styles.congratulationsMessage }>
                                Congratulations, you get { pokeballs } pokeball {pokeballs > 1 ? '\'s\n' : '\n'}
                                Let's open it, shall we ?
                            </Text>

                            <TouchableOpacity onPress={ () => { navigateToPokeballPage() } }>
                                <View style={ styles.button }>
                                    <Text style={ styles.buttonContent }>Open Pokeballs</Text>
                                </View>
                            </TouchableOpacity>
                        </View> 
                        : <TouchableOpacity onPress={ () => { getRandomPokeballs() } }>
                            <View style={ styles.button }>
                                <Text style={ styles.buttonContent }>Get Pokeballs</Text>
                            </View>
                        </TouchableOpacity>
                    }
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen
