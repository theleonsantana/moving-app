import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

export default function Navigation() {
	const classes = useStyles();

	return (
		<AppBar
			position="fixed"
			color="inherit"
			elevation={4}
			className={classes.root}
		>
			{/* <Toolbar variant="dense"> */}
			<ButtonGroup
				variant="text"
				color="light"
				aria-label="text primary button group"
			>
				<Button component={NavLink} exact to="/" color="light" mt={1}>
					Home
				</Button>
				<Button component={NavLink} exact to="/all-jobs" color="light" mt={1}>
					View All Requests
				</Button>
			</ButtonGroup>
			{/* </Toolbar> */}
		</AppBar>
	);
}
