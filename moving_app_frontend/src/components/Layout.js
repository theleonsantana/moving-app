import React, { Component } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

export default class Layout extends Component {
	render() {
		return (
			<div>
				<Container>
					<header className="App-header">
						<Typography variant="h1" align="center" gutterBottom>
							{this.props.header}
						</Typography>
					</header>
					<Grid container justify="center">
						<Grid item xs={12} sm={8}>
							{this.props.children}
						</Grid>
					</Grid>
				</Container>
			</div>
		);
	}
}
