<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ProductCard from './ProductCard.svelte';
	import { mockProductData } from '$lib/data/mockData';

	const { Story } = defineMeta({
		title: 'ProductCard',
		component: ProductCard
	});
</script>

<Story
	name="Primary"
	args={{
		title: mockProductData[0].name,
		handle: mockProductData[0].handle,
		price: mockProductData[0].price,
		images: mockProductData[0].images
	}}
/>
