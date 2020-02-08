import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline, createMuiTheme } from '@material-ui/core';
import './App.css';
import MainRouter from './Router';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<MainRouter />
		</ThemeProvider>
	);
}

export default App;
