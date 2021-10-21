import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen'
import PokeballScreen from '../screens/PokeballScreen'
import ScreenName from './ScreenName';

const Stack = createNativeStackNavigator();

export default function RouteNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={ScreenName.HomeScreen}>
                <Stack.Screen name={ScreenName.HomeScreen} component={HomeScreen} />
                <Stack.Screen name={ScreenName.PokeballScreen} component={PokeballScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}