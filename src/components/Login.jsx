import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Tabs, Card } from 'antd';

const { TabPane } = Tabs;

class Login extends Component {
	state = {  }

	onFinish = () => {

	}

	renderLoginForm = () => {
		return (
			<Form
				name="normal_login"
				className="login-form"
				initialValues={{ remember: true }}
				onFinish={this.onFinish}
			>
				<Form.Item
					name="username"
					rules={[{ required: true, message: 'Please input your Username!'}]}
				>
					<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
				</Form.Item>
				<Form.Item
					name="password"
					rules={[{ required: true, message: 'Please input your Password!' }]}
				>
					<Input
						prefix={<LockOutlined className="site-form-item-icon" />}
						type="password"
						placeholder="Password"
					/>
				</Form.Item>
				<Form.Item>
					<Form.Item name="remember" valuePropName="checked" noStyle>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit" className="login-form-button">
						Log in
					</Button>
				</Form.Item>
			</Form>
		)
	}

	renderSignupForm = () => {
		return (
			<Form
				name="normal_login"
				className="login-form"
				initialValues={{ remember: true }}
				onFinish={this.onFinish}
			>
				<Form.Item
					name="username"
					rules={[{ required: true, message: 'Please input your Username!'}]}
				>
					<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
				</Form.Item>
				<Form.Item
					name="password"
					rules={[{ required: true, message: 'Please input your Password!' }]}
				>
					<Input
						prefix={<LockOutlined className="site-form-item-icon" />}
						type="password"
						placeholder="Password"
					/>
				</Form.Item>
				<Form.Item>
					<Form.Item name="remember" valuePropName="checked" noStyle>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit" className="login-form-button">
						Signup
					</Button>
				</Form.Item>
			</Form>
		)
	}

	render() {
		return (
			<>
				<Tabs defaultActiveKey="1" centered size='large' style={{alignItems: 'center'}}>
					<TabPane tab="Login" key="1">
						<Card  style={{ width: 500, textAlign: 'center', paddingTop: '30px' }}>
							{this.renderLoginForm()}
						</Card>
					</TabPane>
					<TabPane tab="Signup" key="2">
						<Card  style={{ width: 500, textAlign: 'center', paddingTop: '30px' }}>
							{this.renderSignupForm()}
						</Card>
					</TabPane>
				</Tabs>

			</>
		);
	}
}

export default Login;
