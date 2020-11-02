import React from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Card } from 'primereact/card';
import { Link } from "react-router-dom";

function renderLocal(local, type) {
	if(local){
		if(local.descricao)
		{
			return (<Link to={"/patrimonio/" + type.sigla + local.id}><span>{type.descricao} {local.descricao}</span></Link>);
		}
		return (<Link to={"/patrimonio/" + type.sigla + local.id}><span>{type.descricao} {type.sigla}{local.id}</span></Link>);
	}
	return (<span>Sem local</span>);
}

const View = (props) => {
	const { object } = props;
	const { objectType } = props;
	const { local } = props;
	const { localType } = props;
	if (!object)
	{
		return <p className='message'>Não foram encontrados dados sobre este patrimônio :(</p>;
	}
	return (
		<ScrollPanel style={{width: '100%', height: '65vh', align: 'center'}}>
			<div className="p-grid p-justify-center">
				<Card title={objectType.sigla + object.id} subTitle={objectType.descricao} className='objectCard'>
					<div className='p-grid p-dir-col'>
						<span className='p-col object-description'>Descrição: {object.descricao}</span>
						<span className='p-col object-local'>Localização: {renderLocal(local, localType)}</span>
					</div>
				</Card>
			</div>
		</ScrollPanel>
	);
};

export default View;