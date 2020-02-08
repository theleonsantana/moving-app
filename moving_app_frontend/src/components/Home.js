import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Layout from './Layout';

export default class Home extends Component {
	nextPath(path) {
		this.props.history.push(path);
	}
	render() {
		return (
			<Layout header="Moving App">
				<Typography varian="body2" paragraph gutterBottom>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
					imperdiet vehicula magna ullamcorper ornare. Morbi non blandit dui.
					Suspendisse semper congue justo non iaculis. Cras et ex finibus,
					mollis enim nec, tempor nunc. Pellentesque ligula sem, lobortis at
					tempus in, malesuada non odio. Ut volutpat maximus nisl, nec dictum
					dolor facilisis sit amet. Cras sapien felis, aliquam sit amet blandit
					lacinia, vestibulum quis nibh. Vivamus sed odio ultrices, condimentum
					odio eu, tristique est. Nullam odio nunc, malesuada vel lobortis a,
					accumsan non metus. Duis velit libero, semper a aliquet vitae,
					tristique sed lectus. Pellentesque congue sapien vitae erat vulputate
					ultricies. Sed egestas libero ut risus tempor, finibus blandit nunc
					lacinia.
				</Typography>
				<button onClick={() => this.nextPath('/request-service')}>
					Get Started
				</button>
			</Layout>
		);
	}
}
