import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import NewEntry from './components/NewEntry';

export default class MainRouter extends Component {
	render() {
		return (
			<>
				<HashRouter>
					{/* {<Route path="/" exact /> ? null : <Navigation />} */}
					<Navigation />
					<div
					// className={Route.to === '/my-plots' ? '' : 'app-container'}
					>
						<Route path="/" exact component={Home} />
						<Route path="/request-service" component={NewEntry} />

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
