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
			.then(({ data }) => this.setState(this.setState({ requests: data })))
			.catch(({ response }) => console.log(response));
	};
	render() {
		return (
			<div>
				<h2>Client's Requests</h2>
				{this.state.requests.map((request, index) => {
					return (
						<>
							<p>{request.contact}</p>
							<p>{request.contact_info}</p>
							<p>
								<p>{request.start_at}</p>
							</p>
							<p>{request.address}</p>
							<p>Truck Needed: {request.truck ? 'Yes' : 'No'}</p>
						</>
					);
				})}
			</div>
		);
	}
}
