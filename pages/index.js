import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/elements/Loading';
import PokemonItem from '../components/elements/PokemonItem';
import PokemonsFilter from '../components/elements/PokemonsFilter';
import { fetchPokemons } from '../redux/pokemons/pokemons';

export default function Home() {


    const dispatch = useDispatch()

    const { pokemons, isLoading, isError, error } = useSelector(state => state.pokemons)

    // console.log(pokemons);

    useEffect(() => {
        dispatch(fetchPokemons())
    }, [dispatch])

    let content;
    if (isLoading) content = <Loading />
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if (!isLoading && !isError && pokemons.data?.length === 0) {
        content = <div className="col-span-12">No pokemons Found</div>
    }
    if (!isLoading && !isError && pokemons.data?.length > 0) {
        content = pokemons.data.map((pokemon, i) => (
            <PokemonItem pokemon={pokemon} key={i} />
        ))
    }

    return (
        <>
            <section className="container mx-auto pt-12">
                <PokemonsFilter/>
                <div className="pt-12">
                    <div className="grid grid-cols-6 gap-5">
                        {content}                        
                    </div>
                </div>
            </section>

        </>
    )
}
