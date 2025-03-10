<script lang="ts">
	import ProductGrid from '$lib/components/ProductGrid/ProductGrid.svelte';
	import { mockProductData } from '$lib/data/mockData';
</script>

<ProductGrid products={mockProductData} />
