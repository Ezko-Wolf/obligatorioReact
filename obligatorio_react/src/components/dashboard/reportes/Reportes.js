import React, { Component } from 'react';
import 'bootstrap-css-only';
import General from './general';
import GastosRubro from './gastosRubro';
import ComprasRubro from './comprasRubro';

class Reportes extends Component{
    render(){
        return (
            <div className='card' style={{border : 'solid' }}>
                <nav class="navbar navbar-light bg-light ">
                    <form class="form-inline">
                        <button class="btn btn-outline-success" type="button">Reporte General</button>
                        <button class="btn btn-outline-success" type="button">Gastos por Rubro</button>
                        <button class="btn btn-outline-success" type="button">Compras por Rubro</button>
                    </form>
                </nav>     

                <General/>
                <GastosRubro/>
                <ComprasRubro/>          
            </div>
        );
    }
}

export default Reportes;