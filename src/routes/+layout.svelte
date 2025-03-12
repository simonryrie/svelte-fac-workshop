<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header/Header.svelte';
	import { onMount } from 'svelte';
	import { updateBasket } from '$lib/shared/basket.svelte';
	import { afterNavigate } from '$app/navigation';
	import { bagTrayOpen } from '$lib/shared/bagTrayOpen.svelte';

	let { children } = $props();

	onMount(() => {
		const storedBasket = localStorage.getItem('basket');
		if (storedBasket) {
			updateBasket(JSON.parse(storedBasket));
		}
	});

	afterNavigate(() => {
		bagTrayOpen.open = false;
	});
</script>

<Header />

{@render children()}
