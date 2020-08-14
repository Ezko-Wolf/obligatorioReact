import React, { Component, Fragment } from 'react';
import {obtenerGastos} from '../../../services/Api';
import 'bootstrap-css-only';

import ItemGasto from './itemGasto';

const headersTabla = ['Id','Gasto','Monto',''];
class ListadoGastos extends Component {
  constructor (props){
    super(props);
    this.state ={
      listadoGastos : []
    }
  }

  componentDidMount(){
    let user = JSON.parse(localStorage.getItem('user'));
    obtenerGastos(user)
    .then(gastos => {
        if(!gastos){
            console.log('no hay rubros');
        }else if(gastos === -1){
            alert('Servicio no disponible momentaneamente.');
        }else{    
          let listaOrdenada = gastos.gastos; 
          listaOrdenada.sort((a, b) => parseInt(a.id) - parseInt(b.id));
          listaOrdenada = listaOrdenada.slice(listaOrdenada.length - 10);
          console.info(listaOrdenada);  
          listaOrdenada.map(e => {                         
              this.setState({
                listadoGastos : [...this.state.listadoGastos, <ItemGasto gasto = {e}/>]
              }) 
          });
        }          
    });
  }
  
  render() {
    let {listadoGastos} = this.state;
    return (
      <div className="card" style={{border : 'solid' }}>    
        <table class="table">
          <thead class="thead-dark">
            <tr>
              {headersTabla.map(e => <th scope="col">{e}</th>)}            
            </tr>
          </thead>
          <tbody>
            {listadoGastos}
          </tbody>
        </table>        
      </div>
     
    );
  }
}

export default ListadoGastos;