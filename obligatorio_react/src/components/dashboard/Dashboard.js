import React, { Component, Fragment } from 'react';
import {obtenerGastos} from '../../services/Api';
import 'bootstrap-css-only';

import AltaGasto from './altaGasto';
import ListadoGastos from './listadoGastos';
import Reportes from './reportes';

class Dashboard extends Component {
  constructor (props){
    super(props);
    this.state = {
      gastos: []
    };

    this.obtenerYFiltrarGastos = this.obtenerYFiltrarGastos.bind(this);
  }

  obtenerYFiltrarGastos(){
    let user = JSON.parse(localStorage.getItem('user'));
    obtenerGastos(user)
    .then(gastos => {
        if(!gastos){
            console.log('no hay gastos');
        }else if(gastos === -1){
            alert('Servicio no disponible momentaneamente.');
        }else{  
          let listaOrdenada = gastos.gastos; 
          listaOrdenada.sort((a, b) => parseInt(a.id) - parseInt(b.id));
          listaOrdenada = listaOrdenada.slice(listaOrdenada.length - 10);
          this.setState({
            gastos: listaOrdenada
          });  
        }          
    });
  }

  componentDidMount(){
    this.obtenerYFiltrarGastos();
  }
  
  render() {
    const {gastos} = this.state; 
    return (
      <div className="card text-center">
        <div className="card-body">
          <div className= "card">
            <div clss="card-body">                
              <AltaGasto actualizarGastos={this.obtenerYFiltrarGastos}/>
            </div>
            <div clss="card-body">  
              <h6>cositas</h6>        
              <ListadoGastos gastos={gastos} actualizarGastos={this.obtenerYFiltrarGastos}/>
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