import React, { Component } from 'react';

import { Container, Grid, Typography } from '@material-ui/core';

export default class Home extends Component {
	render() {
		return (
			<Container>
				<header className="App-header">
					<Typography variant="h1" align="center" gutterBottom>
						Moving App
					</Typography>
				</header>
				<Grid container justify="center">
					<Grid item xs={12} sm={8}>
						<Typography varian="body2" paragraph gutterBottom>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
							imperdiet vehicula magna ullamcorper ornare. Morbi non blandit
							dui. Suspendisse semper congue justo non iaculis. Cras et ex
							finibus, mollis enim nec, tempor nunc. Pellentesque ligula sem,
							lobortis at tempus in, malesuada non odio. Ut volutpat maximus
							nisl, nec dictum dolor facilisis sit amet. Cras sapien felis,
							aliquam sit amet blandit lacinia, vestibulum quis nibh. Vivamus
							sed odio ultrices, condimentum odio eu, tristique est. Nullam odio
							nunc, malesuada vel lobortis a, accumsan non metus. Duis velit
							libero, semper a aliquet vitae, tristique sed lectus. Pellentesque
							congue sapien vitae erat vulputate ultricies. Sed egestas libero
							ut risus tempor, finibus blandit nunc lacinia.
						</Typography>
						<button>Get Started</button>
					</Grid>
				</Grid>
			</Container>
		);
	}
}
