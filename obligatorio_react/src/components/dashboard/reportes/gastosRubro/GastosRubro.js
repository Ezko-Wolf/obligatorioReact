import React, { Component } from 'react';
import 'bootstrap-css-only';
import ItemGastosRubro from './itemGastos';
import Grafica from './grafica';

const headersTabla = ['Rubro', 'Total'];
class GastosRubro extends Component{
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
            return <ItemGastosRubro key={auxName.nombre} monto={e.total} nombre={auxName.nombre} />      
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
                    totalAux += parseInt(gasto.monto);
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
                  {headersTabla.map(e => <th key={e} scope="col">{e}</th>)}            
                </tr>
              </thead>
              <tbody>                
                {this.processData(gastos, rubros, 0)}
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

export default GastosRubro;