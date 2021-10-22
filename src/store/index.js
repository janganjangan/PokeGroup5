import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import pokemonReducer from './PokemonReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['pokemon'],
    stateReconciler: autoMergeLevel1,
};

const reducers = combineReducers({
    pokemon: pokemonReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        const middleware = getDefaultMiddleware({
            thunk: false,
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
        return middleware;
    }
})

const persistor = persistStore(store);

export { persistor, store };