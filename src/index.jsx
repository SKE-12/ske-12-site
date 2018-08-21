import App from 'core/App'
import { AppContainer } from 'react-hot-loader'
import { initGlobalStyles } from 'core/styles'
import { render } from 'react-dom'

const load = () => {
	initGlobalStyles()
	const root = document.getElementById('root')
	render((
		<AppContainer>
			<App />
		</AppContainer>
	), root)
}

if (module.hot) {
	module.hot.accept('core/App', load)
}

load()
