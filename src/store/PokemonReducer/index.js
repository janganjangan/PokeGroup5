import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pokemonIds: []
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        putPokemonIds: (state, action) => {
            const pokemonSets = new Set([...state.pokemonIds, ...action.payload]);
            state.pokemonIds = Array.from(pokemonSets);
        },
    },
})

export const { putPokemonIds } = pokemonSlice.actions

export default pokemonSlice.reducer