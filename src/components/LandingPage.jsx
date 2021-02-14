import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { UnlockOutlined } from '@ant-design/icons';
import Home from './Home';
import Login from './Login';
import Services from './Services';
import Products from './Products';
import Contact from './Contact';

const { Header } = Layout;

class LandingPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			currentMenu: 'default',
			selectedComponent: <Home/>
		}
	}

	onChangeMenu = (menu) => {
		console.log(menu.key);
		let updatedSelectedComponent = null;
		switch(menu.key) {
			case 'default':
				updatedSelectedComponent = <Home/>
				break;
			case 'services':
				updatedSelectedComponent = <Services/>
				break;
			case 'products':
				updatedSelectedComponent = <Products/>
				break;
			case 'contact':
				updatedSelectedComponent = <Contact/>
				break;
			case 'login':
				updatedSelectedComponent = <Login/>
				break;
			default:
				updatedSelectedComponent = null;
		}
		this.setState({
			selectedComponent: updatedSelectedComponent
		})
	}

	render() {
		const { selectedComponent } = this.state
		return (
			<>
				<Layout>
					<Header className="header">
					<div className="logo" />
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']} >
						<Menu.Item key="default" onClick={this.onChangeMenu}>APP NAME</Menu.Item>
						<Menu.Item key="services" onClick={this.onChangeMenu}>Services</Menu.Item>
						<Menu.Item key="products" onClick={this.onChangeMenu}>Products</Menu.Item>
						<Menu.Item key="contact" onClick={this.onChangeMenu}>Contact</Menu.Item>
						<Menu.Item key="login" onClick={this.onChangeMenu} className='float-right' icon={<UnlockOutlined/>}>Login</Menu.Item>
					</Menu>
				</Header>
				</Layout>
				{selectedComponent}
			</>
		);
	}
}

export default LandingPage;
