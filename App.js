import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import RouteNavigation from './src/navigation';

const App = () => {

  const renderItem = ({ item }) => (
    <Item imgUri={item.imgUri} idx={item.id}/>
  );
 
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RouteNavigation />
    </SafeAreaView>
  );
}

export default App;
