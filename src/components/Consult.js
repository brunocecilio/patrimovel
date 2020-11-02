import React, { Component } from "react";
import styled from "styled-components";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import QrReader from 'react-qr-reader';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class Consult extends Component{
	constructor(props) {
        super(props);
        this.state = {
            itemCode: '',
			showScanner: false,
        };
    }

	handleScan = (data) => {
		if (data) {
			this.setState({
				itemCode: data,
				showScanner: false
			});
			this.searchObject();
		}
	}

	handleError = (err) => {
		toast.error('Não foi possível acessar a câmera.');
		this.setState({showScanner: false});
	}

	searchObject = () => {
		const objectApiUrl = 'https://my-json-server.typicode.com/brunocecilio/my-json-server-patrimovel/objeto/';
		let objectCode = this.state.itemCode.replace(RegExp('[a-zA-Z]*'), '');
		if(objectCode)
		{
			axios.get(objectApiUrl + objectCode)
				.then((response) => {
					this.props.history.push("/patrimonio/" + objectCode);
				}).catch((error) => {
					toast.error('Código do patrimônio não encontrado.');
				});
		}
		else
		{
			toast.error('Digite um código de patrimônio válido.');
		}
	}

	render() {
		return (
					<Wrapper>
						<div className="text-background">
							<span>Informe o número do patrimônio</span>
						</div>
						<div className="p-grid p-dir-col">
							<div className="p-col">
								<span className="textLabel">Escanear código</span>
							</div>
							<div className="p-col">
								{ this.state.showScanner ?
								<QrReader
									delay={300}
									onError={this.handleError}
									onScan={this.handleScan}
									style={{ width: 150 }}
								className='qrScanner' /> : 
								<Button icon='pi pi-microsoft' onClick={(e) => this.setState({showScanner: true})} className="p-button-lg altButton qrIcon" /> }
							</div>
							<div className="p-col">
								<span className="textLabel">Ou digite o número</span>
							</div>
							<div className="p-col">
								<InputText value={this.state.itemCode} onChange={(e) => this.setState({itemCode: e.target.value})} />
							</div>
							<div className="p-col">
								<Button label='Prosseguir' icon='pi pi-fw pi-arrow-right' iconPos="right" className="p-button-lg altButton" onClick={this.searchObject} />
							</div>
						</div>
					</Wrapper>
		);
	}
}

const Wrapper = styled.div`
    text-align: center;
`;

export default Consult;