<script lang="ts">
	import ProductCard from '$lib/components/ProductCard/ProductCard.svelte';
	import type { Product } from '$lib/data/mockData';

	interface Props {
		products: Product[];
	}
	let { products }: Props = $props();
</script>

<div
	class="bg-dark grid grid-cols-2 gap-x-4 gap-y-6 pb-12 pt-6 md:gap-x-6 md:gap-y-10 xl:grid-cols-4 xl:gap-6 p-6"
>
	{#each products as p}
		<ProductCard title={p?.name} handle={p?.handle} price={p?.price} images={p?.images} />
	{/each}
</div>
