import Link from 'next/link';
import React from 'react';

const PokemonItem = ({ pokemon = {} }) => {
    const { id, artist, images, name } = pokemon;
    console.log(pokemon);
    return (
        <>


            <div className="mt-2">
                <Link href={`${id}`}>
                    <a>
                        <img src={images.small} className="w-full h-auto" alt="Some video title" />
                    </a>
                </Link>
                <Link href={`${id}`}>
                    <a>
                        <p className="text-slate-900 text-sm font-semibold">
                            {name}
                        </p>
                    </a>
                </Link>
            </div>


        </>
    );
};

export default PokemonItem;