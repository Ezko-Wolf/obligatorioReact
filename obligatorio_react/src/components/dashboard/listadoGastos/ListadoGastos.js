import React, { Component, Fragment } from 'react';
import 'bootstrap-css-only';

import ItemGasto from './itemGasto';

const headersTabla = ['Id','Gasto','Monto',''];
class ListadoGastos extends Component {
  constructor (props){
    super(props);
    this.state = {
      listadoGastos : []
    };
    this.cargaListado = this.cargaListado.bind(this);
  }

  cargaListado(listaOrdenada){
    return listaOrdenada.map(e => <ItemGasto key={e.id} actualizarGastos={this.props.actualizarGastos} gasto = {e}/>);   
  }
  
  render() {
    return (
      <div className="card" style={{border : 'solid' }}>    
        <table className="table">
          <thead className="thead-dark">
            <tr>
              {headersTabla.map(e => <th key={e} scope="col">{e}</th>)}            
            </tr>
          </thead>
          <tbody>
            {this.cargaListado(this.props.gastos)}
          </tbody>
        </table>        
      </div>
     
    );
  }
}

export default ListadoGastos;