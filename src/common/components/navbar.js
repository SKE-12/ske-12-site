import React from 'react'
import { Menu } from 'element-react'
import 'element-theme-default'

export default class Navbar extends React.Component {
	render () {
		return (
			<div>
				<Menu theme='dark' defaultActive='1' className='el-menu-demo' mode='horizontal'>
					<Menu.Item index='1'>List</Menu.Item>
					<Menu.Item index='2'>Map</Menu.Item>
				</Menu>
			</div>
		)
	}
}
