import React, { Component } from 'react';
import axios from 'axios';

export default class NewEntry extends Component {
	state = {
		contact: '',
		contact_info: '',
		start_at: null,
		address: '',
		truck: Boolean,
		helper: Number,
	};
	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value,
		});
	};
	handleSubmit = event => {
		event.preventDefault();
		const {
			contact,
			contact_info,
			start_at,
			address,
			truck,
			helper,
		} = this.state;
		const request = {
			contact,
			contact_info,
			start_at,
			address,
			truck,
			helper,
		};
		axios
			.post('http://localhost:3000/requests', request)
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
	};
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="start_at">Choose a time for your appointment:</label>
					<input
						onChange={this.handleChange}
						type="datetime-local"
						id="start_at"
						value={this.state.start_at}
						min="2020-01-01T12:00"
						max="2050-01-01T12:00"
					/>
				</form>
			</div>
		);
	}
}
