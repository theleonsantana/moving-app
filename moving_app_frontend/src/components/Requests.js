import React, { Component } from 'react';
import axios from 'axios';

export default class Requests extends Component {
	state = {
		requests: [],
	};
	componentDidMount() {
		this.getRequests();
	}
	getRequests = () => {
		axios
			.get('http://localhost:3000/requests')
			.then(({ data }) => console.log(data))
			.catch(({ response }) => console.log(response));
	};
	render() {
		return (
			<div>
				<h2>Client's Requests</h2>
			</div>
		);
	}
}
