import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
	html: {
		lineHeight: 1.5,
		MozOsxFontSmoothing: 'grayscale',
		textRendering: 'optimizeLegibility',
		WebkitFontSmoothing: 'antialiased',
		WebkitTextSizeAdjust: '100%',
		height: '100%',
	},
	body: {
		minH: '100%',
		background: 'bg.canvas',
		color: 'fg.default',
		_dark: {
			colorScheme: 'dark',
		},
	},
	'*, *::before, *::after': {
		borderColor: 'border.subtle',
		borderStyle: 'solid',
		boxSizing: 'border-box',
	},
	'*::placeholder': {
		opacity: 1,
		color: 'fg.subtle',
	},
	'*::selection': {
		bg: 'accent.a4',
	},
})
