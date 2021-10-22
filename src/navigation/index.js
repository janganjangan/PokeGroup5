import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenName from './ScreenName';
import HomeScreen from '../screens/HomeScreen'
import PokeballScreen from '../screens/PokeballScreen'
import PokedexScreen from '../screens/PokedexScreen';
import EvolutionScreen from '../screens/EvolutionScreen';

const Stack = createNativeStackNavigator();

export default function RouteNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={ScreenName.HomeScreen}>
                <Stack.Screen name={ScreenName.HomeScreen} component={HomeScreen} />
                <Stack.Screen name={ScreenName.PokeballScreen} component={PokeballScreen} />
                <Stack.Screen name={ScreenName.PokedexScreen} component={PokedexScreen} />
                <Stack.Screen name={ScreenName.EvolutionScreen} component={EvolutionScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}