import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import '../assets/styles.css';

import Home from '../components/home';
import TodoList from '../components/todoList';
import Config from '../components/config';
import About from '../components/about';
import Game from '../components/game'

class Router extends React.Component {
	constructor() {
		super();

		this.routes = {
			Home: {
				txt: 'Accueil',
				path: '/',
				component: Home
			},
			Game:{
				txt:'Game',
				path:'/Game',
				component:Game
			},
			TodoList: {
				txt: 'Todo List',
				path: '/TodoList',
				component: TodoList
			},
			Config: {
				txt: 'Configuration',
				path: '/Config',
				component: Config
			},
			About: {
				txt: 'À propos',
				path: '/About',
				component: About
			}
		}
	}

	render() {
		return (
			<BrowserRouter>
				<header>
					<div className="logo"></div>
					<nav>
						<ul id="nav">
							{Object.keys(this.routes).map((route, i) => (
								<li key={i}><NavLink exact to={this.routes[route].path} activeClassName="selected">{this.routes[route].txt}</NavLink></li>
							))}
						</ul>
					</nav>
				</header>
				<div id="page">
					{/*<aside>
						<ul id="subNav"></ul>
					</aside>*/}
					<section>
						<div className="page">
							<div id="title">
								<Switch>
									{Object.keys(this.routes).map((route, i) => (
										<Route key={i} exact path={this.routes[route].path} children={this.routes[route].txt} />
									))}
								</Switch>
							</div>
							<article id="content">
								<Switch>
									{Object.keys(this.routes).map((route, i) => (
										<Route key={i} exact path={this.routes[route].path} component={this.routes[route].component} />
									))}
								</Switch>
							</article>
						</div>
						<footer>
							<div className="content">
								Example React JS By Angamara
							</div>
						</footer>
					</section>
				</div>
			</BrowserRouter>
		);
	}
}

export default Router
