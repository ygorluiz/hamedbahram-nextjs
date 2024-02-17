import { defineSemanticTokens } from '@pandacss/dev'

export const semanticTokens = defineSemanticTokens({
	colors: {
		prose: {
			body: {
				value: 'var(--colors-fg-subtle)',
			},
			heading: {
				value: 'var(--colors-fg-default)',
			},
			lead: {
				value: '{colors.slate.600}',
			},
			link: {
				value: '{colors.slate.900}',
			},
			bold: {
				value: '{colors.slate.900}',
			},
			counter: {
				value: '{colors.slate.500}',
			},
			bullet: {
				value: '{colors.slate.300}',
			},
			hrBorder: {
				value: '{colors.slate.200}',
			},
			quote: {
				value: '{colors.slate.900}',
			},
			quoteBorder: {
				value: '{colors.slate.200}',
			},
			caption: {
				value: '{colors.slate.500}',
			},
			kbd: {
				value: '{colors.slate.900}',
			},
			kbdShadow: {
				// Expects an RGB value
				value: '0 0 0',
			},
			code: {
				value: '{colors.slate.900}',
			},
			preCode: {
				value: '{colors.slate.200}',
			},
			preBg: {
				value: '{colors.slate.800}',
			},
			thBorder: {
				value: '{colors.slate.300}',
			},
			tdBorder: {
				value: '{colors.slate.200}',
			},
		},
	},
})
