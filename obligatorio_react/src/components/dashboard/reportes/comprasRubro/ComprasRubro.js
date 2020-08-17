import React, { Component } from 'react';
import 'bootstrap-css-only';
import ItemsComprasRubro from './itemCompras'; 
import Grafica from './grafica';

const headersTabla = ['Rubro', 'Compras'];
/**
 * Se  listarán  los  rubros  en  los  que  el  usuario  haya  hecho  gastos  y  la cantidad de gastos registrados paracada rubro
 */
class ComprasRubro extends Component{

    constructor(props){
        super(props);
        this.processData = this.processData.bind(this);
        this.buildItems = this.buildItems.bind(this); 
    }

    buildItems(rubros, totales, tipo){
      switch (tipo) {
        case 0:
          return totales.map( e => {
            let auxName = rubros.find(f => f.id == e.id);
            return <ItemsComprasRubro key={auxName.nombre} compras={e.total} nombre={auxName.nombre} />      
        }); 
        case 1:
          return <Grafica montos={totales} nombres={rubros}/> 
      }        
    }

    processData(gastos, rubros, tipo = 0){
        let gastoPorRubro = [];
        let rubs = [];
        let totalPorRubro =[];

        rubros.forEach( e => {
            gastoPorRubro = [...gastoPorRubro, gastos.filter(gasto => {
                    let aux = e.id == gasto.rubro;
                if(aux && !rubs.some(r => r.id == e.id)){
                   rubs.push({'id':e.id, 'nombre':e.nombre});
                }
                if(aux){
                   return {idRubro: gasto.rubro, monto: gasto.monto}
                }
             })]
         })
        gastoPorRubro = gastoPorRubro.filter(e => e.length > 0);

        gastoPorRubro.forEach(g => {
            let totalAux = 0;
            let auxIdGasto = 0;
            g.forEach( gasto =>{
                    totalAux = g.length;
                    auxIdGasto = gasto.rubro;
            });
            totalPorRubro.push({'id': auxIdGasto, 'total': totalAux});
        });

        return this.buildItems(rubs, totalPorRubro, tipo);
    }


    render(){
        const {gastos, rubros} = this.props; 
        return (
            <div className="card">    
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  {headersTabla.map(e => <th scope="col">{e}</th>)}            
                </tr>
              </thead>
              <tbody>                
                {this.processData(gastos, rubros)}
              </tbody>
            </table>  
            <div className='card-body row justify-content-center'>
              <div className='col-5'>
                <div className='row justify-content-center'>
                  {this.processData(gastos, rubros, 1)}
                </div>                    
              </div>                  
            </div>          
          </div>
        );
    }
}

export default ComprasRubro;