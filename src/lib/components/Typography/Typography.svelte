<script lang="ts" context="module">
	export enum TypeVariant {
		H1 = 'text-h1',
		H2 = 'text-h2',
		H3 = 'text-h3',
		H3Em = 'text-h3-em',
		H4 = 'text-h4',
		H5 = 'text-h5',
		H6 = 'text-h6',
		Display1 = 'text-display-1',
		Display1Alt = 'text-display-1-alt',
		Body1 = 'text-body-1',
		Body1Emphasise = 'text-body-1-emphasise',
		Button1 = 'text-button-1',
		Button2 = 'text-button-2',
		Button3 = 'text-button-3',
		Caption1 = 'text-caption-1',
		Caption2 = 'text-caption-2',
		Overline1 = 'text-overline-1'
	}

	export enum TypeComponent {
		h1 = 'h1',
		h2 = 'h2',
		h3 = 'h3',
		h4 = 'h4',
		h5 = 'h5',
		h6 = 'h6',
		p = 'p',
		span = 'span'
	}
</script>

<script lang="ts">
	export let variant: TypeVariant = TypeVariant.Body1;
	export let component: TypeComponent = TypeComponent.span;
	export let strikeThrough: boolean = false;
	export let underline: boolean = false;
	export let bold: boolean = false;
	export let italic: boolean = false;
	export let uppercase: boolean = false;
	export let classes: string = '';
</script>

{#if component === TypeComponent.h1}
	<h1
		class={`${variant} ${classes} `}
		class:uppercase
		class:underline
		class:italic
		class:font-bold={bold}
		class:line-through={strikeThrough}
	>
		<slot />
	</h1>
{:else if component === TypeComponent.h2}
	<h2
		class={`${variant} ${classes} `}
		class:uppercase
		class:underline
		class:italic
		class:font-bold={bold}
		class:line-through={strikeThrough}
	>
		<slot />
	</h2>
{:else if component === TypeComponent.h3}
	<h3
		class={`${variant} ${classes} `}
		class:uppercase
		class:underline
		class:italic
		class:font-bold={bold}
		class:line-through={strikeThrough}
	>
		<slot />
	</h3>
{:else if component === TypeComponent.h4}
	<h4
		class={`${variant} ${classes} `}
		class:uppercase
		class:underline
		class:italic
		class:font-bold={bold}
		class:line-through={strikeThrough}
	>
		<slot />
	</h4>
{:else if component === TypeComponent.h5}
	<h5
		class={`${variant} ${classes} `}
		class:uppercase
		class:underline
		class:italic
		class:font-bold={bold}
		class:line-through={strikeThrough}
	>
		<slot />
	</h5>
{:else if component === TypeComponent.h6}
	<h6
		class={`${variant} ${classes} `}
		class:uppercase
		class:underline
		class:italic
		class:font-bold={bold}
		class:line-through={strikeThrough}
	>
		<slot />
	</h6>
{:else if component === TypeComponent.p}
	<p
		class={`${variant} ${classes} `}
		class:uppercase
		class:underline
		class:italic
		class:font-bold={bold}
		class:line-through={strikeThrough}
	>
		<slot />
	</p>
{:else if component === TypeComponent.span}
	<span
		class={`inline-block ${variant} ${classes} `}
		class:uppercase
		class:underline
		class:italic
		class:font-bold={bold}
		class:line-through={strikeThrough}
	>
		<slot />
	</span>
{/if}

<style lang="postcss">
	.text-h1 {
		@apply 3xl:text-7xl text-3xl font-bold md:text-4xl xl:text-6xl;
	}

	.text-h2 {
		@apply 3xl:text-6xl text-xl md:text-2xl xl:text-4xl;
	}

	.text-h3 {
		@apply 3xl:text-5xl 3xl:leading-[140%] text-lg leading-[140%] xl:text-xl xl:leading-[140%];
	}

	.text-h3-em {
		@apply text-lg font-bold leading-[140%] xl:text-xl xl:leading-[140%];
	}

	.text-h4 {
		@apply 3xl:text-5xl text-lg xl:text-xl;
	}

	.text-h5 {
		@apply 3xl:text-5xl text-lg xl:text-xl;
	}

	.text-h6 {
		@apply 3xl:text-5xl text-lg xl:text-xl;
	}

	.text-display-1 {
		@apply 3xl:text-8xl text-5xl font-bold md:text-6xl xl:text-7xl;
	}

	.text-display-1-alt {
		@apply 3xl:text-8xl font-serif text-5xl md:text-6xl xl:text-7xl;
	}

	.text-body-1 {
		@apply text-base font-light;

		:global(a) {
			@apply text-light-text;

			&:hover {
				@apply underline;
			}
		}

		:global(strong) {
			@apply font-normal;
		}
	}

	.text-body-1-emphasise {
		@apply font-normal underline-offset-2;
	}

	.text-button-1 {
		@apply text-base leading-4;
	}

	.text-button-2 {
		@apply text-md leading-4;
	}

	.text-button-3 {
		@apply text-xl font-bold;
	}

	.text-overline-1 {
		@apply text-xs uppercase tracking-wide;
	}

	.text-caption-1 {
		@apply text-xs xl:text-sm;
	}

	.text-caption-2 {
		@apply text-xs font-light;
	}
</style>
