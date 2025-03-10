import { mockProductData as products } from '$lib/data/mockData';

export function load({ params }) {
	const product = products.find((product) => product.handle === params.slug);

	return {
		product
	};
}
