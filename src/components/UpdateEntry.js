import React, { Component } from 'react';
import axios from 'axios';
import Layout from './Layout';

export default class UpdateEntry extends Component {
	state = {
		request: {},
	};

	componentDidMount() {
		const {
			match: { params },
		} = this.props;
		axios
			.get(`https://moving-app-ada-api.herokuapp.com/requests/${params.jobId}`)
			.then(({ data: request }) => {
				this.setState({ request });
			});
	}

	handleChange = event => {
		const { request } = this.state;
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		this.setState({
			request: { ...request, [event.target.id]: value },
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		const { request } = this.state;
		axios
			.patch(
				`https://moving-app-ada-api.herokuapp.com/requests/${request.id}`,
				request
			)
			.then(() => {
				const { history } = this.props;

				this.setState({ request });

				history.push(`/request-info/${request.id}`);
			});
	};

	handleCancel = event => {
		event.preventDefault();
		const { history } = this.props;
		const { request } = this.state;
		history.push(`/request-info/${request.id}`);
	};
	render() {
		const { request } = this.state;
		return (
			<Layout header="Submit a request">
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="contact">
						Contact Name
						<input
							type="text"
							onChange={this.handleChange}
							id="contact"
							value={request.contact}
						/>
					</label>
					<label htmlFor="contact_info">
						Contact Information (Email):
						<input
							type="text"
							onChange={this.handleChange}
							id="contact_info"
							value={request.contact_info}
						/>
					</label>
					<label htmlFor="start_at">
						Choose a time for your appointment:
						<input
							onChange={this.handleChange}
							type="datetime-local"
							id="start_at"
							value={request.start_at}
							min="2020-01-01T12:00"
							max="2050-01-01T12:00"
						/>
					</label>
					<label htmlFor="address">
						Address:
						<input
							type="text"
							onChange={this.handleChange}
							id="address"
							value={request.address}
						/>
					</label>
					<label htmlFor="truck">
						Do You need a truck:
						<input
							type="checkbox"
							id="truck"
							checked={request.isGoing}
							onChange={this.handleChange}
						/>
					</label>
					<label htmlFor="helper">
						Helpers:
						<input
							type="number"
							max="5"
							onChange={this.handleChange}
							id="helper"
							value={request.helper}
						/>
					</label>
					<button onClick={this.handleCancel}>Cancel</button>
					<input type="submit" value="Update the order" />
				</form>
			</Layout>
		);
	}
}
