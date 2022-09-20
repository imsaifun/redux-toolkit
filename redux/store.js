import { configureStore } from '@reduxjs/toolkit';
import pokemonsReducer from "./pokemons/pokemons"
import filterReducer from "./filter/filter"

export const store = configureStore({
    reducer: {
        pokemons: pokemonsReducer,
        filter:filterReducer
    },
  });