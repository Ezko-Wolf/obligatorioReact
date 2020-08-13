import React, { Component } from 'react';
import 'bootstrap-css-only';
import ItemGastosRubro from './itemGastos';

class GastosRubro extends Component{
    render(){
        return (
            <div className='card-body' style={{border : 'solid' }}>
                <h1>Soy el reporte de gastos por rubro</h1>
                <ItemGastosRubro/>
            </div>
        );
    }
}

export default GastosRubro;