<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Typography, { TypeComponent, TypeVariant } from './Typography.svelte';

	const { Story } = defineMeta({
		title: 'Typography',
		component: Typography
	});
</script>

<Story name="Primary">
	{#snippet children(args)}
		<div class="flex flex-col gap-12">
			<Typography variant={TypeVariant.Display1} component={TypeComponent.h1} {...args}>
				TypeVariant.Display1
			</Typography>
			<Typography variant={TypeVariant.Display1Alt} component={TypeComponent.h1} {...args}>
				TypeVariant.Display1Alt
			</Typography>
			<Typography variant={TypeVariant.H1} component={TypeComponent.h1} {...args}>
				TypeVariant.H1
			</Typography>
			<Typography variant={TypeVariant.H2} component={TypeComponent.h2} {...args}>
				TypeVariant.H2
			</Typography>
			<Typography variant={TypeVariant.H3} component={TypeComponent.h3} {...args}>
				TypeVariant.H3
			</Typography>
			<Typography variant={TypeVariant.H4} component={TypeComponent.h4} {...args}>
				TypeVariant.H4
			</Typography>
			<Typography variant={TypeVariant.H5} component={TypeComponent.h5} {...args}>
				TypeVariant.H5
			</Typography>
			<Typography variant={TypeVariant.H6} component={TypeComponent.h6} {...args}>
				TypeVariant.H6
			</Typography>
			<Typography variant={TypeVariant.Body1} component={TypeComponent.p} {...args}>
				TypeVariant.Body1 -- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
				laoreet consectetur mi non facilisis. Orci varius natoque penatibus et magnis dis parturient
				montes, nascetur ridiculus mus. Vivamus commodo convallis turpis sed consectetur. Nullam
				ornare varius sodales. Aliquam eu enim eu mauris euismod fringilla. Aenean porta augue at
				quam aliquet varius. Aenean facilisis eros dolor, vel facilisis ex laoreet eget. <a href="/"
					>Suspendisse ut fringilla ante</a
				>, nec volutpat mauris. Nunc sed feugiat lacus. Donec ut lacus imperdiet, laoreet ligula ac,
				consectetur leo. Aenean fermentum posuere sapien in molestie. In tempus suscipit blandit.
			</Typography>

			<Typography variant={TypeVariant.Body1Emphasise} component={TypeComponent.p} {...args}>
				TypeVariant.Body1 -- Body1Emphasise
			</Typography>
			<Typography
				variant={TypeVariant.Body1Emphasise}
				component={TypeComponent.p}
				underline
				{...args}
			>
				TypeVariant.Body1 -- Body1Emphasise
			</Typography>
			<Typography variant={TypeVariant.Button1} component={TypeComponent.p} {...args}>
				TypeVariant.Button1
			</Typography>
			<Typography variant={TypeVariant.Button2} component={TypeComponent.p} {...args}>
				TypeVariant.Button2
			</Typography>
			<Typography variant={TypeVariant.Button3} component={TypeComponent.p} {...args}>
				TypeVariant.Button3
			</Typography>
			<Typography variant={TypeVariant.Overline1} component={TypeComponent.p} {...args}>
				TypeVariant.Overline1
			</Typography>
			<Typography variant={TypeVariant.Caption1} component={TypeComponent.p} {...args}>
				TypeVariant.Caption1
			</Typography>
		</div>
	{/snippet}
</Story>
