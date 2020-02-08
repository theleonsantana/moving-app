import React from 'react';
import Requests from './components/Requests';
import { Container } from '@material-ui/core';
import './App.css';

function App() {
	return (
		<Container>
			<header className="App-header">
				<h1>Moving App</h1>
			</header>
			<main className="App-Container">
				<Requests />
			</main>
		</Container>
	);
}

export default App;
