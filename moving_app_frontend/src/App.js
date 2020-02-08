import React from 'react';
import Requests from './components/Requests';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Moving App</h1>
			</header>
			<main className="App-Container">
				<Requests />
			</main>
		</div>
	);
}

export default App;
