import { createSlice } from '@reduxjs/toolkit'
import { uniqueArray } from '../../utility/ArrayUtil';

const initialState = {
    pokemonIds: []
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        putPokemonIds: (state, action) => {
            const pokemonSets = uniqueArray([...state.pokemonIds, ...action.payload]);
            state.pokemonIds = Array.from(pokemonSets);
        },
    },
})

export const { putPokemonIds } = pokemonSlice.actions

export default pokemonSlice.reducer