import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './stories/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				junge: ['"Junge"', 'serif'],
				montserrat: ['"Montserrat"', 'sans']
			},
			screens: {
				'2xs': '375px',
				xs: '480px',
				sm: '600px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1366px',
				'3xl': '1720px',
				'4xl': '1920px',
				'5xl': '2560px',
				landscape: { raw: '(orientation: landscape)' },
				retina: {
					raw: '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'
				}
			},
			fontSize: {
				xs: ['0.75rem', '1rem'],
				sm: ['0.875rem', '1.25rem'],
				base: ['1rem', '1.4rem'],
				md: ['1.125rem', '1.75rem'],
				lg: ['1.1875rem', '1.6625rem'], // 19px
				xl: ['1.4375rem', '1.4375rem'], // 23px
				'2xl': ['1.5625rem', '1.5625rem'], // 25px
				'3xl': ['1.75rem', '1.75rem'], // 28px
				'4xl': ['1.9375rem', '1.9375rem'], // 31px
				'5xl': ['2.0625rem', '2.0625rem'], // 33px
				'6xl': ['3.0625rem', '3.0625rem'], // 49px
				'7xl': ['3.8125rem', '3.8125rem'], // 61px
				'8xl': ['4.75rem', '4.75rem'] // 76px
			},
			colors: {
				white: '#FFFFFF',
				accent: '#E07A5F',
				dark: '#3D405B',
				light: {
					border: {
						a: 'rgb(121 192 204)',
						b: 'rgb(255 83 3)',
						DEFAULT: 'rgb(0 0 0)',
						mid: 'rgb(248 248 248)',
						10: 'rgb(0 0 0 / 0.1)',
						30: 'rgb(0 0 0 / 0.3)',
						60: 'rgb(0 0 0 / 0.6)',
						inverse: 'rgb(255 255 255)',
						'inverse-30': 'rgb(255 255 255 / 0.3)'
					},
					container: {
						a: 'rgb(121 192 204)',
						b: 'rgb(255 83 3)',
						DEFAULT: 'rgb(255 255 255)',
						inverse: 'rgb(0 0 0)',
						mid: 'rgb(248 248 248)',
						'inverse-0': 'rgb(0 0 0 / 0)',
						'inverse-10': 'rgb(0 0 0 / 0.1)',
						'inverse-30': 'rgb(0 0 0 / 0.3)',
						'inverse-60': 'rgb(0 0 0 / 0.6)',
						0: 'rgb(255 255 255 / 0)',
						10: 'rgb(255 255 255 / 0.1)',
						30: 'rgb(255 255 255 / 0.3)',
						60: 'rgb(255 255 255 / 0.6)'
					},
					graphic: {
						a: 'rgb(121 192 204)',
						b: 'rgb(255 83 3)',
						DEFAULT: 'rgb(0 0 0)',
						inverse: 'rgb(255 255 255)'
					},
					text: {
						a: 'rgb(121 192 204)',
						b: 'rgb(255 83 3)',
						DEFAULT: 'rgb(0 0 0)',
						10: 'rgb(0 0 0 / 0.1)',
						30: 'rgb(0 0 0 / 0.3)',
						60: 'rgb(0 0 0 / 0.6)',
						inverse: 'rgb(255 255 255)',
						'inverse-60': 'rgb(255 255 255 / 0.6)'
					}
				}
			},
			borderRadius: {
				none: '0px',
				sm: '2px',
				DEFAULT: '4px',
				md: '6px',
				lg: '8px',
				xl: '12px',
				'2xl': '16px',
				'3xl': '24px',
				'4xl': '28px',
				full: '9999px'
			},
			lineHeight: {
				12: '3rem'
			},
			spacing: {
				'3xs': '12px',
				'2xs': '16px',
				xs: '24px',
				sm: '32px',
				md: '40px',
				lg: '48px',
				xl: '56px'
			}
		}
	},

	plugins: [typography, containerQueries, aspectRatio]
} as Config;
