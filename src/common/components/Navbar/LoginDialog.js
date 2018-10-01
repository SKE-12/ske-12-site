import React from 'react'
import { Dialog, Form, Input, Button } from 'element-react'

export default class LoginDialog extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			visibility: props.loginVisibility,
			loginForm: {
				email: '',
				password: '',
			},
		}
	}

	componentWillReceiveProps (nextProps) {
		this.setState({ visibility: nextProps.loginVisibility })
	}

	onChange (key, value) {
		this.state.loginForm[key] = value
		this.forceUpdate()
	}

	render () {
		return (
			<div>
				<Dialog title='Login' visible={this.state.visibility} onCancel={() => this.setState({ visibility: false })}>
					<Dialog.Body>
						<Form model={this.state.loginForm}>
							<Form.Item label='Email'>
								<Input size='small' value={this.state.loginForm.email} onChange={this.onChange.bind(this, 'email')} />
							</Form.Item>
							<Form.Item label='Password'>
								<Input size='small' type='password' value={this.state.loginForm.password} onChange={this.onChange.bind(this, 'password')} />
							</Form.Item>
						</Form>
					</Dialog.Body>
					<Dialog.Footer>
						<Button onClick={() => { this.setState({ visibility: false }) }}>Cancel</Button>
						<Button type='primary' onClick={() => { this.setState({ visibility: false }) }}>Login</Button>
					</Dialog.Footer>
				</Dialog>
			</div>
		)
	}
}
