/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import PokeballsScreen from './src/screens/PokeballsScreen'

const App: () => Node = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={ HomeScreen } />
        <Stack.Screen name="Details" component={ HomeScreen } />
        <Stack.Screen name="OpenPokeballs" component={ PokeballsScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
