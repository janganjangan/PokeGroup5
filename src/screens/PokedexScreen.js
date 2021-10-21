import React from 'react';
import { Text, View } from 'react-native'
import { useRoute } from '@react-navigation/core';

const PokedexScreen = () => {

    const route = useRoute();
    console.log(route.params.listPokemonIds)

    return (
        <View>

        </View>
    )
}

export default PokedexScreen;