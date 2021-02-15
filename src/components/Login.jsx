import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Tabs, Card } from 'antd';

const { TabPane } = Tabs;

class Login extends Component {
	state = {  }

	onFinish = () => {

	}

	validatePassword = (rule, value, callback) => {
		if (value.length < 6) {
			callback("Password must have atleast 6 characters in length");
    } else {
      callback();
    }
	}

	validateMobileNumber = (rule, value, callback) => {
		if(value.length === 10) {
			callback();
		}
		callback('Invalid mobile number');
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
					name="email"
					rules={[
						{required: true, message: 'Please input your Email address!'},
						{type: "email"}
					]}
				>
					<Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email"/>
				</Form.Item>
				<Form.Item
					name="phone"
					rules={[
						{required: true, message: 'Please input your mobile number!'},
						{validator: this.validateMobileNumber}
					]}
				>
					<Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Mobile Number"/>
				</Form.Item>
				<Form.Item
					name="password"
					rules={[
						{required: true, message: 'Please input your Password!'},
						{validator: this.validatePassword}
					]}
				>
					<Input
						prefix={<LockOutlined className="site-form-item-icon" />}
						type="password"
						placeholder="Password"
					/>
				</Form.Item>
				<Form.Item
					name="repeatPassword"
					rules={[{ required: true, message: 'Please input your Password!' }]}
				>
					<Input
						prefix={<LockOutlined className="site-form-item-icon" />}
						type="password"
						placeholder="Repeat Password"
					/>
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
