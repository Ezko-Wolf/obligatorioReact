import React, { Component } from 'react';
import 'bootstrap-css-only';
import General from './general';
import GastosRubro from './gastosRubro';
import ComprasRubro from './comprasRubro';
import {obtenerGastos , obtenerRubros} from '../../../services/Api';



class Reportes extends Component{
    constructor(props){
        super(props);
        this.state = {
            gastos: [],
            rubros: []
        };

        this.cargarGastos = this.cargarGastos.bind(this);
        this.cargarRubros = this.cargarRubros.bind(this);
    }

    cargarGastos(user){
        obtenerGastos(user)
        .then(gastos => {
            if(!gastos){
                console.log('no hay gastos');
            }else if(gastos === -1){
                alert('Servicio no disponible momentaneamente.');
            }else{  
                this.setState({
                    gastos: gastos.gastos
                });  
            }          
        });
    }

    cargarRubros(user){
        this.setState({
            userData : user
        });
        obtenerRubros(user)
        .then(rubs => {
            if(!rubs){
                console.log('no hay rubros');
            }else if(rubs === -1){
                alert('Servicio no disponible momentaneamente.');
            }else{          
                this.setState({
                    rubros: rubs.rubros
                }); 
            }          
        });
    }

    componentDidMount(){        
        let user = JSON.parse(localStorage.getItem('user'));
        this.cargarGastos(user);
        this.cargarRubros(user);
    }


    render(){
        const {gastos, rubros} = this.state;
        // console.info('En reportes');
        // console.info(gastos);
        // console.info(rubros);
        return (
            <div className='card' style={{border : 'solid' }}>
                <nav className="navbar navbar-light bg-light ">
                    <form className="form-inline">
                        <button className="btn btn-outline-success" type="button">Reporte General</button>
                        <button className="btn btn-outline-success" type="button">Gastos por Rubro</button>
                        <button className="btn btn-outline-success" type="button">Compras por Rubro</button>
                    </form>
                </nav>     

                <General/>
                <GastosRubro gastos={gastos} rubros={rubros}/>
                <ComprasRubro/>          
            </div>
        );
    }
}

export default Reportes;