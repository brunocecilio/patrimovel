import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import 'primereact/resources/themes/arya-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { Button } from 'primereact/button';

let menuItems = [
    {label: 'Consulta rápida', icon: 'pi pi-fw pi-search'},
	{label: 'Lista de patrimônios', icon: 'pi pi-fw pi-list'}
];

function Home() {
	return (
		<div className="App-body">
			<div className="p-grid">
				<div className="p-col-12 p-md-6">
					<Link to="/consultar">
						<Button label={menuItems[0].label} icon={menuItems[0].icon} iconPos="right" className="p-button-lg menuItem" />
					</Link>
				</div>
				<div className="p-col-12 p-md-6">
					<Link to="/patrimonios">
						<Button label={menuItems[1].label} icon={menuItems[1].icon} iconPos="right" className="p-button-lg menuItem" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Home;