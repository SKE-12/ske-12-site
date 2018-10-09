import React from 'react'
import { Menu } from 'element-react'
import LoginDialog from './LoginDialog'
import 'element-theme-default'
import { RightMenuItem } from './styled'

export default class Navbar extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			loginVisibility: false,
		}
	}

	changePage (page) {
		if (page === '9') {
			this.setState({
				loginVisibility: true,
			})
		}
	}

	render () {
		return (
			<div>
				<Menu theme='dark' defaultActive='1' className='el-menu-demo' mode='horizontal' onSelect={this.changePage.bind(this)}>
					<Menu.Item index='1'>List</Menu.Item>
					<Menu.Item index='2'>Map</Menu.Item>
					<RightMenuItem index='9'>Login</RightMenuItem>
				</Menu>
				<LoginDialog loginVisibility={this.state.loginVisibility} />
			</div>
		)
	}
}
