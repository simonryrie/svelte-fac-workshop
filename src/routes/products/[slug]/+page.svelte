<script lang="ts">
	import ProductDetail from '$lib/components/ProductDetail/ProductDetail.svelte';

	let { data } = $props();

	const product = data.product;
</script>

{#if product}
	<ProductDetail
		id={product.id}
		name={product.name}
		price={product.price}
		availableStock={product.availableStock}
		images={product.images}
		description={product.description}
	/>
{/if}
