import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import 'primereact/resources/themes/arya-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Header from './components/Header';
import Container from './components/Container';

function App() {
	return (
		<Router>
			<div>
				<Header />
				<Container />
			</div>
		</Router>
	);
}

export default App;
