import { Component } from 'react'

export default class App extends Component {
	state = {
		name: 'ske-12-site',
	}

	render () {
		return (
			<div className='App'>
				<h1>Welcome ดดดto {this.state.name}</h1>
			</div>
		)
	}
}
