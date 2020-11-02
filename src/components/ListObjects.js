import React, { useEffect, useState } from "react";
import styled from "styled-components";
import List from './Objects/List';
import Loading from './Loading';
import axios from 'axios';

function ListObjects() {
  const ListLoading = Loading(List);
  const [appState, setAppState] = useState({
    loading: false,
	objects: null,
	objectTypes: null
  });

  useEffect(() => {
    setAppState({ loading: true });
	const objectTypesApiUrl = 'https://my-json-server.typicode.com/brunocecilio/my-json-server-patrimovel/tipo_objeto';
    const objectsApiUrl = 'https://my-json-server.typicode.com/brunocecilio/my-json-server-patrimovel/objeto';

	axios.all([
			axios.get(objectTypesApiUrl),
			axios.get(objectsApiUrl)
		])
		.then((response) => {
			setAppState({ objectTypes: response[0].data, objects: response[1].data, loading: false });
	});

  }, [setAppState]);
  return (
    <Wrapper>
		<div className="text-background">
			<span>Lista de patrimônios</span>
		</div>
      <div className='objects-container'>
        <ListLoading isLoading={appState.loading} objects={appState.objects} objectTypes={appState.objectTypes} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    text-align: center;
`;

export default ListObjects;