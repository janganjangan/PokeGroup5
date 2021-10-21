import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {
    IC_RED_POKEBALL as RedPokeball,
    IC_BLUE_POKEBALL as BluePokeball,
    IC_YELLOW_POKEBALL as YellowPokeBall
} from '../assets'
import { GREATBALL_TYPE, ULTRABALL_TYPE } from '../constants';
import { randomWithRange } from '../utility/RandomUtil';

const PokemonItem = ({ pokemonType }) => {

    const [pokemonId, setPokemonId] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let randomPokemonId = 0;
        switch (pokemonType) {
            case GREATBALL_TYPE:
                randomPokemonId = randomWithRange(101, 200);
                break;
            case ULTRABALL_TYPE:
                randomPokemonId = randomWithRange(201, 300);
                break;
            default:
                randomPokemonId = randomWithRange(1, 100);
        }
        setPokemonId(randomPokemonId);
    }, []);

    return (
        <TouchableOpacity style={styles.container}>
            {/* <Animated.View style={[{ transform: [{ translateY: animated }] }]}> */}
            {
                pokemonType === GREATBALL_TYPE ? (
                    <Image style={styles.pokeballImage} source={BluePokeball} />
                ) : pokemonType === ULTRABALL_TYPE ? (
                    <Image style={styles.pokeballImage} source={YellowPokeBall} />
                ) :
                    <Image style={styles.pokeballImage} source={RedPokeball} />
            }
            {/* </Animated.View> */}
        </TouchableOpacity>
    )
}

export default PokemonItem;

const styles = StyleSheet.create({
    container: {
        marginVertical: 12,
        flex: 1 / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pokeballImage: {
        width: 100,
        height: 100
    }
})