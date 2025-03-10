<script lang="ts">
	import Typography, {
		TypeComponent,
		TypeVariant
	} from '$lib/components/Typography/Typography.svelte';
	import { updateQuantity } from '$lib/shared/basket.svelte';
	import Icon from '../Icon/Icon.svelte';

	interface Props {
		id: string;
		name: string;
		price: number;
		images: string[];
		quantity: number;
	}

	let { id, name, price, images, quantity }: Props = $props();

	const buttonClasses = 'bg-light-container-mid w-6 h-6 flex items-center';
</script>

<div class="w-full flex gap-3 p-3">
	<div class="w-1/6">
		<img src={images[0]} />
	</div>
	<div class="flex w-1/4 flex-col justify-center gap-3">
		<Typography variant={TypeVariant.H4} component={TypeComponent.h4}>
			{name}
		</Typography>
		<Typography variant={TypeVariant.Body1} component={TypeComponent.p}>
			{price}
		</Typography>
	</div>
	<div class="flex gap-2 items-center justify-center">
		<button class={buttonClasses} on:click={() => updateQuantity(id, quantity - 1)}>
			<Icon icon="minus" />
		</button>
		<Typography variant={TypeVariant.Body1} component={TypeComponent.p}>
			{quantity}
		</Typography>
		<button class={buttonClasses} on:click={() => updateQuantity(id, quantity + 1)}>
			<Icon icon="plus" />
		</button>
	</div>
</div>
