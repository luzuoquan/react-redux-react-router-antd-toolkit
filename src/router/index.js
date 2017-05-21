/**
 * [routes 路由]
 * @type {Array}
 */
import React, { Component } from 'react'

const Feed = (props) => (
	<div className="spa-component">
		<h2>Feed component</h2>
	</div>
)

const Test = (props) => (
	<div className="spa-component">
		<h2>Test component</h2>
	</div>
)

const componentsRoutes = [
	{	
		basename: '/home',
		exact: true,
		path: '/feed',
		component: Feed
	},
	{
		basename: '/home',
		path: '/test',
		component: Test
	}
]

const routes = [
	{
		title: '主页',
		key: 'home',
		iconType: 'home',
		routes: [
			{
				title: 'feed流',
				key: 'feed',
				path: '/home/feed'
			},
			{
				title: 'test',
				key: 'test',
				path: '/home/test'
			}
		]
	},
	{
		title: '用户中心',
		key: 'userCenter',
		iconType: 'user',
		routes: [
			{
				title: '个人信息',
				key: 'infomation',
				path: 'userInfo'
			}
		]
	}
]

export {
	routes,
	componentsRoutes
}