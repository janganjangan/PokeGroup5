import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScreenName from '../../navigation/ScreenName';
import { useSelector } from 'react-redux';
import { POKEMON_IMAGE_WITH_ID } from '../../constants';

const MyPokemonIconButton = () => {

    const navigation = useNavigation();
    const pokemonIds = useSelector((state) => state.pokemon.pokemonIds);

    const navigateToPokedexScreen = () => {
        navigation.navigate(ScreenName.PokedexScreen, {
            listPokemonIds: pokemonIds,
            type: ''
        })
    }

    return (
        <TouchableOpacity activeOpacity={0.5} onPress={navigateToPokedexScreen}>
            <Icon name="list" size={18} />
        </TouchableOpacity>
    )
}

export default MyPokemonIconButton;