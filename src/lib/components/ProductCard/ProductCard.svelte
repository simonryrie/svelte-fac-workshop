<script lang="ts">
	import Typography, { TypeVariant } from '../Typography/Typography.svelte';

	interface Props {
		title: string;
		handle: string;
		price: number;
		images: string[];
	}
	let { title, handle, price, images }: Props = $props();
</script>

<div>
	<a
		href="/products/{handle}"
		class="w-full bg-light-container-mid rounded-4xl flex flex-col gap-2 justify-center py-4 px-3"
	>
		<img src={images[0]} />
		<Typography variant={TypeVariant.Body1} classes="text-dark">{title}</Typography>
		<Typography variant={TypeVariant.Body1} classes="text-dark">{price}</Typography>
	</a>
</div>
