import axios from 'axios';
import React, { Component } from 'react';
import Layout from './Layout';

export default class JobInfo extends Component {
	state = {
		requests: {},
	};
	componentDidMount() {
		const {
			match: { params },
		} = this.props;
		axios
			.get(`https://moving-app-ada-api.herokuapp.com/requests/${params.jobId}`)
			.then(({ data }) => this.setState({ requests: data }))
			.catch(({ response }) => console.log(response));
	}
	handleDelete = () => {
		const {
			match: { params },
			history,
		} = this.props;
		axios
			.delete(
				`https://moving-app-ada-api.herokuapp.com/requests/${params.jobId}`
			)
			.then(() => {
				history.push('/');
			})
			.catch(({ response }) => console.log(response));
	};

	nextPath(path) {
		this.props.history.push(path);
	}

	toUpdate = event => {
		event.preventDefault();
		const {
			match: { params },
			history,
		} = this.props;
		history.push(`/request-info/${params.jobId}/edit`);
	};

	render() {
		const { requests } = this.state;
		return (
			<Layout>
				<h2>{requests.contact}</h2>
				<button onClick={this.toUpdate}>Update</button>
				<button onClick={this.handleDelete}>Delete</button>
				<button onClick={() => this.nextPath('/all-jobs')}>Back</button>
			</Layout>
		);
	}
}
