import React, { Component, Fragment } from 'react';
import 'bootstrap-css-only';

const headersTabla = ['Cantidad', 'Total'];
class General extends Component{

    /**
     * se deberá mostrar la cantidad de gastos registrados en la aplicación y el monto total de todos los gastos registrados hasta el momento.
     */
    constructor(props){
        super(props);
        this.buildItems = this.buildItems.bind(this); 
    }

    buildItems(gastos){        
        let total = 0;
        let cantidadGastos = gastos.length;

        gastos.forEach(g => {
            total += parseInt(g.monto);
        });

        return (
            <Fragment>
                <tr>
                    <th scope="row">{cantidadGastos}</th>
                    <td>{total}</td>
                </tr>
            </Fragment>
        );
    }

    render(){   
        const {gastos} = this.props; 
        return (
            <div className="card">    
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  {headersTabla.map(e => <th scope="col">{e}</th>)}            
                </tr>
              </thead>
              <tbody>    
                {this.buildItems(gastos)}    
              </tbody>
            </table>        
          </div>
        );
    }
}

export default General;