import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { IC_RED_POKEBALL as RedPokeball } from '../../../assets/index'
import MainButton from './MainButton'

const ViewPokeballs = ({ handler, pokeballs }) => {

    const strCongratulations = 
    `Congratulations, you get ${ pokeballs } pokeball${ pokeballs > 1 ? '\'s' : '' }
    Let's open it, shall we ?`

    const styles = StyleSheet.create({
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
        <View style={ styles.viewPokeballWrapper }>
            <View style={{ alignItems: 'center' }}>
                <Image source={ RedPokeball } style={ styles.pokeBall }/>
            </View>
            <Text style={ styles.congratulationsMessage }>
                { strCongratulations }
            </Text>

            <MainButton description="Open Pokeballs" handler={ handler } />
        </View> 
    )
}

export default ViewPokeballs
