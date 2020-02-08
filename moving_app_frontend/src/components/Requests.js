import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
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
			.then(({ data }) => this.setState({ requests: data }))
			.catch(({ response }) => console.log(response));
	};
	render() {
		return (
			<Layout header="Client's Requests">
				{this.state.requests.map((request, index) => {
					return (
						<>
							<Link to={`/request-info/${request.id}`}>
								<p>{request.contact}</p>
							</Link>
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
			</Layout>
		);
	}
}
