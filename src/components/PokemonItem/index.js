import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { GREATBALL_TYPE, ULTRABALL_TYPE } from '../../constants';
import { randomWithRange } from '../../utility/RandomUtil';
import { Pokeball, Greatball, Ultraball } from '../';

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

    const renderPokeball = () => {
        switch (pokemonType) {
            case GREATBALL_TYPE:
                return <Greatball />
            case ULTRABALL_TYPE:
                return <Ultraball />
            default:
                return <Pokeball />
        }
    }

    return (
        <TouchableOpacity style={styles.container}>
            {/* <Animated.View style={[{ transform: [{ translateY: animated }] }]}> */}
            {renderPokeball()}
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
    }
})