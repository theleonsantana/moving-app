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
								{new Intl.DateTimeFormat('en-US', {
									month: 'long',
									day: '2-digit',
									year: 'numeric',
									hour: '2-digit',
									minute: '2-digit',
								}).format(new Date(request.start_at))}
							</p>
							<p>{request.address}</p>
							<p>Truck Needed: {request.truck ? 'Yes' : 'No'}</p>
							<p>Helpers: {request.helper}</p>
						</>
					);
				})}
			</div>
		);
	}
}
