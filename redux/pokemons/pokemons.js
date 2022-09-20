
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemons } from "./pokemonsApi";

const initialState = {
    pokemons: [],
    isLoading: false,
    isError: false,
    error: ""
}

// async thunk
export const fetchPokemons = createAsyncThunk('pokemons/fetchPokemons',
    async () => {
        const pokemons = await getPokemons()
        console.log(pokemons);
        return pokemons;
    })


    const pokemonsSlice = createSlice({
        name: "pokemons",
        initialState,
        extraReducers: (builder) => {
            builder
                .addCase(fetchPokemons.pending, (state) => {
                    state.isError = false;
                    state.isLoading = true;
                })
                .addCase(fetchPokemons.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.pokemons = action.payload
                })
                .addCase(fetchPokemons.rejected, (state, action) => {
                    state.isLoading = false;
                    state.pokemons = [];
                    state.isError = true;
                    state.error = action.error?.message
                })
        }
    })
    
    export default pokemonsSlice.reducer;