import React from 'react';
import { Card } from 'primereact/card';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Link } from "react-router-dom";

const List = (props) => {
	const { objects } = props;
	const { objectTypes } = props;
	if (!objects || objects.length === 0)
	{
		return <p className='message'>Não foram encontrados patrimônios :(</p>;
	}
	return (
		<ScrollPanel style={{width: '100%', height: '65vh'}}>
			<div className='p-grid'>
				{objects.map((object) => {
					let tipoObjeto = objectTypes.find(function (element) { return element.id === object.tipo_id; });
					let cardTitle = tipoObjeto.descricao + ' ' + tipoObjeto.sigla + object.id;
					return (
						<Link to={"/patrimonio/" + tipoObjeto.sigla + object.id} key={object.id} className='objectCardList p-col-12 p-md-6 p-lg-3'>
							<Card title={cardTitle}>
								{object.descricao}
							</Card>
						</Link>
					);
				})}
			</div>
		</ScrollPanel>
	);
};

export default List;