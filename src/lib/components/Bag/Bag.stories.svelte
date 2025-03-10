<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Bag from './Bag.svelte';

	const { Story } = defineMeta({
		title: 'Bag',
		component: Bag
	});
</script>

<Story
	name="Primary"
	args={{
		basket: [
			{ id: '1', quantity: 1 },
			{ id: '2', quantity: 2 },
			{ id: '3', quantity: 3 },
			{ id: '4', quantity: 4 }
		]
	}}
/>
