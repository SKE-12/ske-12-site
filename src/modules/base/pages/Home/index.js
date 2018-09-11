import React from 'react'
import Navbar from '../../../../common/components/navbar'
export default class Home extends React.Component {
	render () {
		console.log(Navbar)
		return (
			<div>
				<Navbar />
				<h1>This is Home</h1>
			</div>
		)
	}
}
