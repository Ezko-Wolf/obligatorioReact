import React, { Component, Fragment } from 'react';
import 'bootstrap-css-only';
import Grafica from './grafica';

const headersTabla = ['Cantidad', 'Total'];
class General extends Component{

    /**
     * se deberá mostrar la cantidad de gastos registrados en la aplicación y el monto total de todos los gastos registrados hasta el momento.
     */
    constructor(props){
      super(props);
      this.buildItems = this.buildItems.bind(this); 
    }

    buildItems(gastos, type = 0){        
        let total = 0;
        let cantidadGastos = gastos.length;

        gastos.forEach(g => {
            total += parseInt(g.monto);
        });      

        switch (type) {
          case 0:
            return (
              <Fragment>
                  <tr>
                      <th scope="row">{cantidadGastos}</th>
                      <td>{total}</td>
                  </tr>
              </Fragment>
            );        
          case 1:             
            return <Grafica cant={cantidadGastos} total={total}/>             
        }
        
    }

    render(){   
        const {gastos} = this.props; 
        return (
            // <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="card">    
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      {headersTabla.map(e => <th scope="col">{e}</th>)}            
                    </tr>
                  </thead>
                  <tbody>    
                    {this.buildItems(gastos, 0)}    
                  </tbody>
                </table> 
                <div className='card-body row justify-content-center'>
                  <div className='col-5'>
                    <div className='row justify-content-center'>
                      {this.buildItems(gastos, 1)} 
                    </div>                    
                  </div>                  
                </div>                      
              </div>
            //  </div>            
        );
    }
}

export default General;