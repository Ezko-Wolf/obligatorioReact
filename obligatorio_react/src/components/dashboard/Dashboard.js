import React, { Component, Fragment } from 'react';
import 'bootstrap-css-only';

import AltaGasto from './altaGasto';
import ListadoGastos from './listadoGastos';
import Reportes from './reportes';

class Dashboard extends Component {
  constructor (props){
    super(props);
  }
  
  render() {
    return (
      <div>
        <h1>Hola soy un dash</h1>
        <AltaGasto/>
        <ListadoGastos/>
        <Reportes/>
      </div>
     
    );
  }
}

export default Dashboard;