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
			.get(`http://localhost:3000/requests/${params.jobId}`)
			.then(({ data: request }) => {
				this.setState({ request });
			});
	}

	handleChange = event => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		this.setState({
			[event.target.id]: value,
		});
	};

	handleSubmit = request => {
		axios
			.put(`http://localhost:3000/requests${request.jobId}`, request)
			.then(() => {
				this.setState({ request });
			});
		const { history } = this.props;
		history.push(`/request-info/${request.jobId}`);
	};

	handleCancel = event => {
		event.preventDefault();
		const { history } = this.props;
		const { request } = this.state;
		history.push(`/request-info/${request.jobId}`);
	};
	render() {
		return (
			<Layout header="Submit a request">
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="contact">
						Contact Name
						<input
							type="text"
							onChange={this.handleChange}
							id="contact"
							value={this.state.contact}
						/>
					</label>
					<label htmlFor="contact_info">
						Contact Information (Email):
						<input
							type="text"
							onChange={this.handleChange}
							id="contact_info"
							value={this.state.contact_info}
						/>
					</label>
					<label htmlFor="start_at">
						Choose a time for your appointment:
						<input
							onChange={this.handleChange}
							type="datetime-local"
							id="start_at"
							value={this.state.start_at}
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
							value={this.state.address}
						/>
					</label>
					<label htmlFor="truck">
						Do You need a truck:
						<input
							type="checkbox"
							id="truck"
							checked={this.state.isGoing}
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
							value={this.state.helper}
						/>
					</label>
					<input type="submit" value="Submit Job Request" />
				</form>
			</Layout>
		);
	}
}
