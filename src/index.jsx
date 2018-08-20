import { AppContainer } from 'react-hot-loader'
import AsyncApp from 'AsyncApp'
import { injectGlobal } from 'styled-components'
import { render } from 'react-dom'

injectGlobal`
	body {
		padding: 20px;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}
`

const root = document.getElementById('root')
const load = () => render((
	<AppContainer>
		<AsyncApp />
	</AppContainer>
), root)

// This is needed for Hot Module Replacement
if (module.hot) {
	module.hot.accept('./App', load)
}

load()
