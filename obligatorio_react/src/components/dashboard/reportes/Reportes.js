import React, { Component } from 'react';
import 'bootstrap-css-only';
import General from './general';
import GastosRubro from './gastosRubro';
import ComprasRubro from './comprasRubro';
import {obtenerGastos , obtenerRubros} from '../../../services/Api';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Modal} from 'react-bootstrap';

const style = {borderColor: 'white'};

class Reportes extends Component{
    constructor(props){
        super(props);
        this.state = {
            gastos: [],
            rubros: [],
            visible: false,
            componenteAMostrar: ''
        };

        this.cargarGastos = this.cargarGastos.bind(this);
        this.cargarRubros = this.cargarRubros.bind(this);
        this.mostrarModal = this.mostrarModal.bind(this);
        this.cerrarModal = this.cerrarModal.bind(this);        
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

    mostrarModal(e){
        let id = e.target.id;
        setTimeout(() => {            
            const {gastos, rubros} = this.state;            
            switch (id) {
                case 'general':
                    this.setState({
                        componenteAMostrar: <General gastos={gastos}/>,
                        visible: true
                    });
                break;
            
                case 'gastosPorRubro':
                    this.setState({
                        componenteAMostrar: <GastosRubro gastos={gastos} rubros={rubros}/>,
                        visible: true
                    });
                break;
                case 'comprasPorRubro':
                    this.setState({
                        componenteAMostrar: <ComprasRubro gastos={gastos} rubros={rubros}/>,
                        visible: true
                    });
                break;
            }
        },1000);
        
    }

    cerrarModal(){ 
        this.setState({
            componenteAMostrar: '',
            visible: false
        });        
    }

    componentDidMount(){        
        let user = JSON.parse(localStorage.getItem('user'));
        this.cargarGastos(user);
        this.cargarRubros(user);
    }


    render(){
        const {visible, componenteAMostrar} = this.state;
        return (   
            <div>
                <nav className="navbar fixed-bottom navbar-dark bg-dark">                    
                    <button className="navbar-brand btn" id='general' onClick={this.mostrarModal} style={style}>Reporte General</button>
                    <button className="navbar-brand btn" id='gastosPorRubro' onClick={this.mostrarModal} style={style}>Gastos por Rubro</button>
                    <button className="navbar-brand btn" id='comprasPorRubro' onClick={this.mostrarModal} style={style}>Compras por Rubro</button>
                 </nav>                 
                <Modal show={visible} size="lg" centered>
                    <Modal.Body>
                        {componenteAMostrar}
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-primary" style={{backgroundColor:"#343a40", color:"white"}} onClick={this.cerrarModal} >Cerrar</button>
                    </Modal.Footer>
                </Modal>
            </div>   
        );
    }
}

export default Reportes;

