<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ProductGrid from './ProductGrid.svelte';
	import { mockProductData } from '$lib/data/mockData';

	const { Story } = defineMeta({
		title: 'ProductGrid',
		component: ProductGrid
	});
</script>

<Story
	name="Primary"
	args={{
		products: mockProductData
	}}
/>
