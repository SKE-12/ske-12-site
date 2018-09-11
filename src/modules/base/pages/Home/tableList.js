import React from 'react'

import { Table } from 'element-react'

export default class TableList extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			columns: [
				{
					label: 'Name',
					prop: 'name',
				},
				{
					label: 'Work Place Name',
					prop: 'workplaceName',
				},
				{
					label: 'Work Place Address',
					prop: 'workplaceAddress',
				},
				{
					label: 'Telephone',
					prop: 'tel',
				},
			],
			mockData: [
				{
					name: 'Arude Sandstorm',
					workplaceName: 'Sellsuki',
					workplaceAddress: 'lol I will not tell u',
					tel: '0812345678',
				},
			],
		}
	}
	render () {
		return (
			<Table columns={this.state.columns} data={this.state.mockData} />
		)
	}
}
