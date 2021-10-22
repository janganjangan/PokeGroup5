import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './src/store';
import RouteNavigation from './src/navigation';

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={{ flex: 1 }}>
          <RouteNavigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

export default App;
