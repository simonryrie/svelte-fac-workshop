<script lang="ts">
	import { iconMap } from './iconMap';

	export let icon = '';
	export let classNames = '';
	export let width: number = 24;
	export let height: number = 24;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	style={`width: ${width}px; height: ${height}px;`}
	class={`inline-block fill-current stroke-current stroke-0 icon-${icon} ${classNames}`}
>
	{@html iconMap[`icon-${icon}`]}
	<use href="#{`icon-${icon}`}" />
</svg>
