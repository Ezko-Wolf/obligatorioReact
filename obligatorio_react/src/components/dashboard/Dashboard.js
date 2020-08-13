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
      <div className="card text-center">
        <div className="card-body">
          <div className= "card">
            <div clss="card-body">                
              <AltaGasto/>
            </div>
            <div clss="card-body">  
              <h6>cositas</h6>        
              <ListadoGastos/>
            </div>
          </div>          
        </div>        
        <div className="card-footer">
          <Reportes/>
        </div>
      </div>     
    );
  }
}

export default Dashboard;