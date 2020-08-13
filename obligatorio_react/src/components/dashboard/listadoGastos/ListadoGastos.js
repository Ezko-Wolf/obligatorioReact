import React, { Component, Fragment } from 'react';
import 'bootstrap-css-only';

import ItemGasto from './itemGasto';

class ListadoGastos extends Component {
  constructor (props){
    super(props);
  }
  
  render() {
    return (
      <Fragment>
        <h1>Soy el listado y tengo varios </h1>
        <ItemGasto/>
      </Fragment>
     
    );
  }
}

export default ListadoGastos;