import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Container, Grid, Typography } from '@material-ui/core';

const styles = theme => ({
	root: {
		marginTop: 80,
	},
});

class Layout extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Container className={classes.root}>
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
		);
	}
}

Layout.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
