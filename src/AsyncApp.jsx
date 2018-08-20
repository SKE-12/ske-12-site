import universal from 'react-universal-component'

const AsyncApp = universal(import('App'), {
	loading: () => <h1>Loading</h1>,
})
AsyncApp.preload()

export default AsyncApp
