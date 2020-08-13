import React, { Component, Fragment } from 'react';
import 'bootstrap-css-only';

import ItemGasto from './itemGasto';

class ListadoGastos extends Component {
  constructor (props){
    super(props);
  }
  
  render() {
    return (
      <div className="card" style={{border : 'solid' }}>        
        <ItemGasto/>
        <ItemGasto/>
        <ItemGasto/>
        <ItemGasto/>
      </div>
     
    );
  }
}

export default ListadoGastos;