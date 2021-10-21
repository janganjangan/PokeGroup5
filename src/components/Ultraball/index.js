import React from 'react';
import { Image, StyleSheet } from 'react-native';
import {
    IC_YELLOW_POKEBALL as YellowPokeBall
} from '../../assets'

const Greatball = () => (
    <Image style={styles.pokeballImage} source={YellowPokeBall} />
)

export default Greatball;

const styles = StyleSheet.create({
    pokeballImage: {
        width: 100,
        height: 100
    }
})