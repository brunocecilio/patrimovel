import React, { useEffect, useState } from "react";
import styled from "styled-components";
import View from './Objects/View';
import Loading from './Loading';
import axios from 'axios';

function ViewObject(props) {
	const ObjectLoading = Loading(View);
	const [appState, setAppState] = useState({
		loading: false,
		object: null,
		objectType: null,
		local: null,
		localType: null
	});

	let handle = props.match.params.handle.replace(RegExp('[a-zA-Z]*'), '');

	useEffect(() => {
		setAppState({ loading: true });
	
	const objectTypeApiUrl = 'https://my-json-server.typicode.com/brunocecilio/my-json-server-patrimovel/tipo_objeto/';
	const objectApiUrl = 'https://my-json-server.typicode.com/brunocecilio/my-json-server-patrimovel/objeto/';

	axios.get(objectApiUrl + handle)
		.then((response) => {
			let object = response.data;
			axios.get(objectTypeApiUrl + response.data.tipo_id)
				.then((response) => {
					let objectType = response.data;
					if(object.local_id)
					{
						axios.get(objectApiUrl + object.local_id)
							.then((response) => {
								let local = response.data;
								axios.get(objectTypeApiUrl + response.data.tipo_id)
									.then((response) => {
										setAppState({ object, objectType, local, localType: response.data, loading: false });
								});
						});
					}
					else{
						setAppState({ object, objectType, loading: false });
					}
			});
		}).catch((error) => {
			setAppState({ loading: false });
		});

  }, [setAppState, handle]);
  return (
    <Wrapper>
		<div className="text-background">
			<span>Patrimônio</span>
		</div>
      <div className='objects-container'>
        <ObjectLoading isLoading={appState.loading} object={appState.object} objectType={appState.objectType} local={appState.local} localType={appState.localType} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    text-align: center;
`;

export default ViewObject;