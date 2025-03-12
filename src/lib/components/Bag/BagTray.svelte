<script lang="ts">
	import BagItem from '../Bag/BagItem.svelte';
	import Typography, { TypeComponent, TypeVariant } from '../Typography/Typography.svelte';
	import { getBasket } from '$lib/shared/basket.svelte';
	import { mockProductData, type Product } from '$lib/data/mockData';
	import { bagTrayOpen } from '$lib/shared/bagTrayOpen.svelte';
	import { fly } from 'svelte/transition';
	import { sineIn } from 'svelte/easing';

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

	let totalPrice = $derived.by(() => {
		return products.reduce((sum, product) => {
			if (product.quantity) {
				return sum + product.price * product.quantity;
			}
			return sum;
		}, 0);
	});

	const closeTray = () => (bagTrayOpen.open = false);
</script>

{#if bagTrayOpen.open}
	<div
		class="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-4 flex flex-col"
		transition:fly={{ x: 250, duration: 300, easing: sineIn }}
	>
		<button class="self-end mb-4" on:click={closeTray}>✕</button>

		<Typography variant={TypeVariant.H3} component={TypeComponent.h3}>Your Bag</Typography>

		{#if products.length > 0}
			<div class="flex flex-col gap-2 overflow-y-auto">
				{#each products as product}
					{#if product.quantity && product.quantity > 0}
						<BagItem
							id={product.id}
							name={product.name}
							price={product.price}
							images={product.images}
							quantity={product.quantity}
						/>
					{/if}
				{/each}
			</div>
			<div class="mt-4 p-4 border-t">
				<Typography variant={TypeVariant.H4} component={TypeComponent.h4}>
					Total: £{totalPrice.toFixed(2)}
				</Typography>
				<a href="/bag" class="block text-center bg-dark text-white py-2 px-4 rounded mt-2"
					>View Full Bag</a
				>
			</div>
		{:else}
			<Typography variant={TypeVariant.Body1} component={TypeComponent.p}
				>Basket is empty</Typography
			>
		{/if}
	</div>
{/if}
