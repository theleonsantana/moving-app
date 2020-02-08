import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
	render() {
		return (
			<div>
				<NavLink exact to="/" activeClassName="is-active">
					Home
				</NavLink>
				<NavLink exact to="/all-jobs" activeClassName="is-active">
					View All Requests
				</NavLink>
			</div>
		);
	}
}
