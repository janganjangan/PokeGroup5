import React from 'react';
import { Image, StyleSheet } from 'react-native';
import {
    IC_RED_POKEBALL as RedPokeball,
} from '../../assets'

const Pokeball = () => {

    return (
        <Image style={styles.pokeballImage} source={RedPokeball} />
    )
}

export default Pokeball;

const styles = StyleSheet.create({
    pokeballImage: {
        width: 100,
        height: 100
    }
})