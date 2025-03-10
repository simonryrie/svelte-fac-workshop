<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ProductDetail from './ProductDetail.svelte';
	import { mockProductData } from '$lib/data/mockData';

	const { Story } = defineMeta({
		title: 'ProductDetail',
		component: ProductDetail
	});
</script>

<Story
	name="Primary"
	args={{
		id: mockProductData[0].id,
		name: mockProductData[0].name,
		price: mockProductData[0].price,
		availableStock: mockProductData[0].availableStock,
		images: mockProductData[0].images,
		description: mockProductData[0].description
	}}
/>
