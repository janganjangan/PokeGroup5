import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/core';

const EvolutionScreen = () => {

    const route = useRoute();

    const { idPoke } = route.params;
   
    return (
        <View>
            <Text>{ idPoke }</Text>
        </View>
    )
}

export default EvolutionScreen;