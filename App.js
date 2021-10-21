/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import RouteNavigation from './src/navigation';

const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RouteNavigation />
    </SafeAreaView>
  );
};

export default App;
