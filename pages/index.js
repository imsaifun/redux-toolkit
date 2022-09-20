import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../redux/pokemons/pokemons';

export default function Home() {


    const dispatch = useDispatch()

    const { pokemons, isLoading, isError, error } = useSelector(state => state.pokemons)

    console.log(pokemons);
    
    useEffect(() => {
        dispatch(fetchPokemons())
    }, [dispatch])


    return (
        <>


        </>
    )
}
