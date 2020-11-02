import React from 'react';
import logo from '../logo.png';
import '../App.css';

import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="App-header">
			<Link to="/">
				<img src={logo} className="App-Logo" alt="logo" />
			</Link>
			<div className="Header-user-bar" />
		</header>
	);
}

export default Header;
