import React, { Component } from 'react';
import 'bootstrap-css-only';
import ItemGastosRubro from './itemGastos';

const headersTabla = ['Rubro', 'Total'];
class GastosRubro extends Component{
    constructor(props){
        super(props);
        this.processData = this.processData.bind(this);
        this.buildItems = this.buildItems.bind(this); 
    }
    /**
     * Se listarán todos los rubros en los que el usuario haya hecho gastos y el importe total acumulado de cada rubro.
     * autos 5mil
     */

    buildItems(rubros, totales){
        return totales.map( e => {
            let auxName = rubros.find(f => f.id == e.id);
            return <ItemGastosRubro monto={e.total} nombre={auxName.nombre} />
        });
    }

    processData(gastos, rubros){
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

        return this.buildItems(rubs, totalPorRubro);
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
          </div>
        );
    }
}

export default GastosRubro;