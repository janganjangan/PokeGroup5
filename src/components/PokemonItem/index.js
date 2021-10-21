import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import {
    GREATBALL_TYPE,
    ULTRABALL_TYPE,
    POKEMON_IMAGE_WITH_ID
} from '../../constants';
import { randomWithRange } from '../../utility/RandomUtil';
import { Pokeball, Greatball, Ultraball } from '../';

const PokemonItem = ({ pokemonType, onPokemonItemClicked, id }) => {

    const [pokemonId, setPokemonId] = useState(0);
    const [imageUri, setImageUri] = useState('');

    useEffect(() => {
        let randomPokemonId = 0;
        switch (pokemonType) {
            case GREATBALL_TYPE:
                randomPokemonId = randomWithRange(101, 201);
                break;
            case ULTRABALL_TYPE:
                randomPokemonId = randomWithRange(201, 301);
                break;
            default:
                randomPokemonId = randomWithRange(1, 101);
        }
        setPokemonId(randomPokemonId);
    }, []);

    const onPressPokeball = () => {
        setImageUri(POKEMON_IMAGE_WITH_ID(pokemonId))
        onPokemonItemClicked(id, pokemonId)
    }

    const renderPokemonImage = () => {
        return (
            <Image style={styles.image} source={{ uri: imageUri }} />
        )
    }

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
        <View style={styles.container}>
            {
                imageUri !== '' ? renderPokemonImage() :
                    <TouchableOpacity
                        onPress={onPressPokeball}
                    >
                        {renderPokeball()}
                    </TouchableOpacity>
            }
        </View>
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
    image: {
        width: 100,
        height: 100,
    }
})