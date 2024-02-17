import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'
import { globalCss } from '@/theme/global-css'
import typographyPreset from 'pandacss-preset-typography'
import { semanticTokens } from '@/theme/semantic-tokens'

export default defineConfig({
	// Whether to use css reset
	preflight: true,
	presets: [
		typographyPreset(),
		'@pandacss/dev/presets',
		'@pandacss/preset-base',
		createPreset({
			accentColor: 'violet',
			grayColor: 'neutral',
			borderRadius: 'md',
		}),
	],

	// Where to look for your css declarations
	include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			semanticTokens,
		},
	},
	jsxFramework: 'react',
	globalCss,

	// The output directory for your css system
	outdir: 'styled-system',
})
