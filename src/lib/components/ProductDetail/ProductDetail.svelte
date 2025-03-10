<script lang="ts">
	import Typography, {
		TypeComponent,
		TypeVariant
	} from '$lib/components/Typography/Typography.svelte';
	import { getBasket, addToBasket } from '$lib/shared/basket.svelte';

	interface Props {
		id: string;
		name: string;
		price: number;
		availableStock: number;
		images: string[];
		description: string;
	}
	let { id, name, price, availableStock, images, description }: Props = $props();

	const addToBag = () => {
		const basket = getBasket();
		const basketItem = basket.find((item) => item.id === id);
		const totalInBasket = basketItem ? basketItem.quantity : 0;

		if (totalInBasket < availableStock) {
			addToBasket(id);
		} else {
			alert(`Only ${availableStock} items available`);
		}
	};
</script>

<div class="flex">
	<div class="flex flex-col w-1/2 gap-4">
		{#each images as image, i}
			<img src={image} alt={i === 0 ? `A packet of ${name}` : `A bowl of ${name}`} />
		{/each}
	</div>
	<div class="flex flex-col w-1/2 gap-4 px-12 pt-12">
		<Typography variant={TypeVariant.H2} component={TypeComponent.h2}>
			{name}
		</Typography>
		<Typography variant={TypeVariant.Body1} component={TypeComponent.p}>
			{description}
		</Typography>
		<Typography variant={TypeVariant.Body1Emphasise} component={TypeComponent.p}>
			{price}
		</Typography>
		<button class="bg-dark text-white py-2 px-4 rounded-4xl w-max" on:click={addToBag}
			>Add to bag</button
		>
	</div>
</div>
