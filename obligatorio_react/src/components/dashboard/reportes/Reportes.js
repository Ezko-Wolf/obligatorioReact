import React, { Component } from 'react';
import 'bootstrap-css-only';
import General from './general';
import GastosRubro from './gastosRubro';
import ComprasRubro from './comprasRubro';
import {obtenerGastos , obtenerRubros} from '../../../services/Api';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const style = {borderColor: 'white'};

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
        const { url, path } = this.props;        
        return (
            <Router> 
                <nav className="navbar fixed-bottom navbar-dark bg-dark">
                    <Link className="navbar-brand btn" style={style} to={`${url}/general`}>Reporte General</Link>
                    <Link className="navbar-brand btn" style={style} to={`${url}/gastosRubro`}>Gastos por Rubro</Link>
                    <Link className="navbar-brand btn" style={style} to={`${url}/comprasRubro`}>Compras por Rubro</Link>
                </nav>                
                <Switch>
                    <Route path={`${path}/general`} render = { (props) => <General gastos={gastos} {...props}/>}/>
                    <Route path={`${path}/gastosRubro`} render = { (props) => <GastosRubro gastos={gastos} rubros={rubros} {...props}/>}/>
                    <Route path={`${path}/comprasRubro`} render = { (props) => <ComprasRubro gastos={gastos} rubros={rubros} {...props}/>}/>
                </Switch>
            </Router>
            //     <General />
            //     <GastosRubro gastos={gastos} rubros={rubros}/>
            //     <ComprasRubro gastos={gastos} rubros={rubros}/>          
            // </div>           
        );
    }
}

export default Reportes;

