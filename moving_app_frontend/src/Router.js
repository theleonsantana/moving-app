import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import JobInfo from './components/JobInfo';
import NewEntry from './components/NewEntry';
import Requests from './components/Requests';

export default class MainRouter extends Component {
	render() {
		return (
			<>
				<HashRouter>
					<Navigation />
					<div>
						<Route path="/" exact component={Home} />
						<Route path="/request-info/:jobId" component={JobInfo} />
						<Route path="/request-service" component={NewEntry} />
						<Route path="/all-jobs" component={Requests} />
					</div>
				</HashRouter>
			</>
		);
	}
}
