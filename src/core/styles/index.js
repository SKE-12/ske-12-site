import colors from 'common/styles/mixins/colors'
import fontFamilies from 'common/styles/mixins/fonts/fontFamilies'
import fontWeight from 'common/styles/mixins/fonts/fontWeight'
import { injectGlobal } from 'styled-components'

export const initGlobalStyles = () => {
	injectGlobal`
		body {
			font-family: ${fontFamilies.normal};
			color: ${colors.black};
		}
		h1, h2, h3, h4, h5, h6, label {
			font-weight: ${fontWeight.highlight.bold};
			font-family: ${fontFamilies.highlight};
		}

		${[1, 2, 3, 4, 5, 6]
		.map(
			size => `
			h${size} {
				font-size: ${40 - 4 * size}px;
			}
		`,
		)
		.join('')}
	`
}
