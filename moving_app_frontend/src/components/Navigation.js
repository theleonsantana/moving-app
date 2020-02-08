import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
	render() {
		return (
			<div>
				<NavLink
					exact
					to="/"
					activeClassName="is-active"
					className="nav-item m-2"
				>
					Home
				</NavLink>
			</div>
		);
	}
}
