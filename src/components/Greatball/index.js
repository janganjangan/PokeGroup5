import React from 'react';
import { Image, StyleSheet } from 'react-native';
import {
    IC_BLUE_POKEBALL as BluePokeball,
} from '../../assets'

const Greatball = () => {

    return (
        <Image style={styles.pokeballImage} source={BluePokeball} />
    )
}

export default Greatball;

const styles = StyleSheet.create({
    pokeballImage: {
        width: 100,
        height: 100
    }
})