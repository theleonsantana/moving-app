import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, NavLink, Route } from 'react-router-dom';
import Home from './components/Home';

export default class MainRouter extends Component {
	render() {
		return (
			<>
				<HashRouter>
					<NavLink
						exact
						to="/"
						activeClassName="is-active"
						className="nav-item m-2"
					>
						Home
					</NavLink>
					<div
						// className={Route.to === '/my-plots' ? '' : 'app-container'}
						className={'site-container'}
					>
						<Route path="/" exact component={Home} />

						{/* <Route
							path="/login"
							component={LogInForm}
							isLoggedIn={this.state.isLoggedIn}
						/>
						<Route
							path="/signup"
							component={SignUpForm}
							isLoggedIn={this.state.isLoggedIn}
						/>
						<Route
							path="/logout"
							component={LogOut}
							isLoggedIn={this.state.isLoggedIn}
						/>
					</div>
					<div className="app-container">
						<Route path="/my-plots" component={Plot} />
						<Route path="/planting-chart" component={PlantingChart} />
						<Route path="/plant-reference" component={PlantReference} />
					</div>
					<Footer /> */}
					</div>
				</HashRouter>
			</>
		);
	}
}
