import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { Typography, Card } from '@material-ui/core';
import Layout from './Layout';
import axios from 'axios';

const styles = theme => ({
	root: {
		width: 'calc(100%/2)',
	},
});

class Requests extends Component {
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
		const { classes } = this.props;
		return (
			<Layout>
				<Typography variant="h2" align="center">
					Client's Requests
				</Typography>
				{this.state.requests.map((request, index) => {
					return (
						<Card className={classes.root}>
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
						</Card>
					);
				})}
			</Layout>
		);
	}
}

Requests.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Requests);
