/* eslint-disable @next/next/no-img-element */
import  Link  from 'next/link';
// import './PokemonItem.scss';

const PokemonItem = (props) => {
	return (
		<>
			<li className='item'>
				<div className='item__img'>
					<img className='item__img-img' src={props.image} alt={props.name} />
					<div className='item__overlay'>
						<Link className='link' href={`/pokemon/${props.id}`}>
							<a className='item__overlay-details'>MORE DETAILS</a>
						</Link>
						{/* <FavButtons id={props.id} className='item__overlay-details' /> */}
					</div>
				</div>
			</li>
		</>
	);
};

export default PokemonItem;
