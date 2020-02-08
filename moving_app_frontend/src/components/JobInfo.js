import React, { Component } from 'react';
import axios from 'axios';

export default class JobInfo extends Component {
	state = {
		requests: {},
	};
	componentDidMount() {
		const {
			match: { params },
		} = this.props;
		axios
			.get(`http://localhost:3000/requests/${params.jobId}`)
			.then(({ data }) => this.setState({ requests: data }))
			.catch(({ response }) => console.log(response));
	}
	handleDelete = () => {
		const {
			match: { params },
			history,
		} = this.props;
		axios
			.delete(`http://localhost:3000/requests/${params.jobId}`)
			.then(() => {
				history.push('/');
			})
			.catch(({ response }) => console.log(response));
	};

	render() {
		const { requests } = this.state;
		return (
			<div>
				<p>{requests.contact}</p>
				<button onClick={this.handleDelete}>Delete</button>
			</div>
		);
	}
}
