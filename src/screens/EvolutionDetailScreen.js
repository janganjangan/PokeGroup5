import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/core';

const EvolutionDetailScreen = () => {

    const route = useRoute();

    const { pokemonId } = route.params;
   
    return (
        <View>
            <Text>{ pokemonId }</Text>
        </View>
    )
}

export default EvolutionDetailScreen;