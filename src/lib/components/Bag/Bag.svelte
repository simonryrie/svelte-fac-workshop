<script lang="ts">
	import { mockProductData, type Product } from '$lib/data/mockData';
	import Typography, { TypeComponent, TypeVariant } from '../Typography/Typography.svelte';
	import BagItem from './BagItem.svelte';
	import { getBasket } from '$lib/shared/basket.svelte';

	let products = $derived.by(() => {
		const basket = getBasket();
		return basket
			.map((basketItem) => {
				const product = mockProductData.find((p) => p.id === basketItem.id);
				if (product) {
					return { ...product, quantity: basketItem.quantity };
				}
				return null;
			})
			.filter(Boolean) as Product[];
	});
</script>

<div class="flex flex-col">
	{#if products?.length > 0}
		{#each products as product}
			{#if product.quantity}
				<BagItem
					id={product.id}
					name={product.name}
					price={product.price}
					images={product.images}
					quantity={product.quantity}
				/>
			{/if}
		{/each}
	{:else}
		<Typography variant={TypeVariant.Body1} component={TypeComponent.p}>Basket is empty</Typography>
	{/if}
</div>
