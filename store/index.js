import { configureStore } from '@reduxjs/toolkit';
// import pokemonSlice from './pokemon-slice';
// import filterSlice from './filter-slice';

const store = configureStore({
	reducer: { 
		// pokemons: pokemonSlice, 
		// filter: filterSlice
	 },
});

export default store;