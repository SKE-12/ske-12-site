import React from 'react'
import Navbar from '../../../../common/components/Navbar'
import TableList from './tableList'
export default class Home extends React.Component {
	render () {
		return (
			<div>
				<Navbar />
				<h1>This is Home</h1>
				<TableList />
			</div>
		)
	}
}
