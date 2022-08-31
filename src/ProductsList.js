import ProductCard from './ProductCard';

const ProductsList = (props) => {
	const  { data: products } = props;
	return (
	<div>
		<div>
		<div>
			<h2>Products</h2>
		</div>
		</div>
		<div>
		{products.map((product) => <ProductCard key={product.sku} {...product} />)}
		</div>
	</div>
	);
}

export default ProductsList;
