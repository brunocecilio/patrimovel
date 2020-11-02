import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Consult from './Consult';
import ListObjects from './ListObjects';
import ViewObject from './ViewObject';

function Container() {
  return (
    <Wrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/consultar" component={Consult} />
          <Route path="/patrimonios" component={ListObjects} />
		  <Route path="/patrimonio/:handle" component={ViewObject} />
        </Switch>
    </Wrapper>
  );
}

const Wrapper = styled.div`
`;

export default Container;