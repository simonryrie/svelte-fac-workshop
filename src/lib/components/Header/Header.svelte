<script lang="ts">
	import Icon from '../Icon/Icon.svelte';
	import BagTray from '../Bag/BagTray.svelte';
	import { bagTrayOpen } from '$lib/shared/bagTrayOpen.svelte';

	$inspect(bagTrayOpen);
</script>

<div
	class="sticky bg-white top-0 w-full h-24 flex items-center justify-between pl-4 pr-12 border-b border-color-dark"
>
	<a href="/">
		<img src="/logo.png" width="96px" height="96px" />
	</a>
	<button on:click={() => (bagTrayOpen.open = true)}>
		<Icon icon="basket" width={32} height={32} />
	</button>
</div>

<BagTray />
