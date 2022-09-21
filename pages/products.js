import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import Tags from "../components/Tags";
import { fetchProducts } from "../redux/products/products";

function Home() {
	const dispatch = useDispatch()

	const { products, isLoading, isError, error } = useSelector(state => state.products)
	const { tags, search } = useSelector((state) => state.filter);
	// console.log(tags);

	useEffect(() => {
		dispatch(fetchProducts({tags, search}))
	}, [dispatch,tags, search])

	let content;
	if (isLoading) content = "Loading"
	if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
	if (!isLoading && !isError && products.data?.length === 0) {
		content = <div className="col-span-12">No products Found</div>
	}
	if (!isLoading && !isError && products.data?.length > 0) {
		content = products.data.map((product, i) => (
			<ProductItem product={product} key={i} />
		))
	}

	return (
		<>
			<Tags />
			<section className="pt-12">
				<div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
					{content}
				</div>
			</section>
		</>
	);
}

export default Home;
