import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonsFilter from '../components/Filter/PokemonsFilter';
import PerPage from '../components/Filter/PerPage';
import PokemonList from '../components/Pokemons/PokemonList';
import Layout from '../components/Layout/Layout';
import {
    getAllPokeSubtypes, getAllPokeTypes, getPokemons
} from '../store/pokemon-actions';

function Home() {
	const dispatch = useDispatch();
	const pokeData = useSelector((state) => state.pokemons);
	const filterData = useSelector(state => state.filter)

	useEffect(() => {
		dispatch(getAllPokeTypes());
		dispatch(getAllPokeSubtypes());
	}, [dispatch]);

	// useEffect(() => {
	// 	localStorage.setItem('pokeApp-fav', JSON.stringify(pokeData.favPokemons));
	// }, [pokeData.favPokemons]);

	useEffect(() => {
		dispatch(
			getPokemons(
				filterData.currentPage,
				filterData.pageSize,
				filterData.name,
				filterData.chosenType,
				filterData.chosenSubtype
			)
		);
	}, [
		dispatch,
		filterData.currentPage,
		filterData.pageSize,
		filterData.name,
		filterData.chosenType,
		filterData.chosenSubtype,
	]);

	return (
		<Layout>
			<PokemonsFilter />
			<PerPage />
			<PokemonList />
		</Layout>
	);
}

export default Home;
