import React, { Component } from 'react'
import { store, history } from '../redux/store'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { BrowserRouter as Router, Route, Link, Redirect, NavLink } from 'react-router-dom'
import { withRouter} from 'react-router'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'

import { routes, componentsRoutes } from '../router'

const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			collapsed: false,
			mode: 'inline',
			defaultOpenKeys: ['home'], // 初始选中的菜单项 key 数组
			selectedKeys: ['feed'], // 当前选中的菜单项 key 数组	
			defaultSelectedKeys: ['feed'], // 初始展开的 SubMenu 菜单项 key 数组	
			openKeys: ['home'] // 当前展开的 SubMenu 菜单项 key 数组
		}
	}
	componentWillMount() {
		const {history} = this.props

		if(location.pathname === '/') {
			location.replace('/home/feed')
		}
		// console.info(location)
	}
	render() {
		if(location.pathname === '/') {
			<Redirect to="/home/feed" />
		}
		return (
			<Provider store={store}>
  				<ConnectedRouter history={history}>
  					<Layout>
  						<Sider
							collapsible
							collapsed={this.state.collapsed}
							onCollapse={this.onCollapse}
				        >
			          		<div className="logo"></div>
			          		<Menu theme="dark"
			          			mode={this.state.mode}
			          			onSelect={this.onSelect}
			          			onOpenChange={this.onOpenChange}
			          			openKeys={this.state.openKeys}
			          			defaultOpenKeys={this.state.defaultOpenKeys}
			          			selectedKeys={this.state.selectedKeys}
			          			defaultSelectedKeys={this.state.defaultSelectedKeys}>
			          			{routes.map(item => (
			          				<SubMenu
			          					key={item.key}
			          					title={<span><Icon type={item.iconType} /><span className="nav-text">{item.title}</span></span>}>
			          					{item.routes.map(routeItem => (
			          						<Menu.Item key={routeItem.key}><NavLink to={routeItem.path}>{routeItem.title}</NavLink></Menu.Item>
			          					))}
			          				</SubMenu>
			          			))}
			          		</Menu>
			        	</Sider>
			        	<Layout>
			        		<Header>
			        			头部
			        		</Header>
			        		<Content>
			        			<div className="spa-page">
			        				{componentsRoutes.map((route, index) => (
			            				<Route
			            					key={index}
			            					path={route.basename + route.path}
		            						exact={route.exact}
		            						component={route.component}
		            					/>
			            			))}
			        			</div>
			        		</Content>
			        		<Footer style={{ textAlign: 'center' }}>
			            		react-antd© 2017
			          		</Footer>
			        	</Layout>
  					</Layout>
  				</ConnectedRouter>
  			</Provider>
		)
	}
}