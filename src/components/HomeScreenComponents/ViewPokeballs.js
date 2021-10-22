import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import RedPokeball from '../Pokeball'
import MainButton from './MainButton'

const ViewPokeballs = ({ handler, pokeballs }) => {

    const strCongratulations = 
    `Congratulations, you get ${ pokeballs } pokeball${ pokeballs > 1 ? '\'s' : '' }
    Let's open it, shall we ?`
    
    return (
        <View style={ styles.viewPokeballWrapper }>
            <View style={{ alignItems: 'center' }}>
                <RedPokeball/>
                <Image style={ styles.pokeBall }/>
            </View>
            <Text style={ styles.congratulationsMessage }>
                { strCongratulations }
            </Text>

            <MainButton description="Open Pokeballs" handler={ handler } />
        </View> 
    )
}

export default ViewPokeballs;

const styles = StyleSheet.create({
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