import React, { Component } from 'react';
import 'bootstrap-css-only';
import ItemsComprasRubro from './itemCompras'; 

class ComprasRubro extends Component{
    render(){
        return (
            <div className='card-body' style={{border : 'solid' }}>
                <h1>Soy el reporte de Compras por rubro</h1>
                <ItemsComprasRubro/>
            </div>
        );
    }
}

export default ComprasRubro;