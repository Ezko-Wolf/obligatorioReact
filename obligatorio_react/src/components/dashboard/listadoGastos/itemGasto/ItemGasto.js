import React, { Component, Fragment } from 'react';
import {bajaGasto} from '../../../../services/Api';

class ItemGasto extends Component{
    constructor(props){
        super(props);
        this.state = {
            idGasto:'',
            userData:{}
        };

        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount(){
        let user = JSON.parse(localStorage.getItem('user'));
        let {gasto} = this.props;
        this.setState({
            idGasto:gasto.id,
            userData : user
        });        
    };

    deleteItem(e) {
        e.preventDefault();
        const {idGasto, userData} = this.state;
        bajaGasto(userData, idGasto)
        .then(baja => {
            if(!baja){
                console.log('no se puedo dar baja');
            }else if(baja === -1){
                alert('Servicio no disponible momentaneamente.');
            }else{          
                alert('Baja correcta');
                this.props.actualizarGastos();
            }          
        });
    };

    render(){
        let {gasto} = this.props;
        return (
            <Fragment>
                <tr>
                    <th scope="row">{gasto.id}</th>
                    <td>{gasto.nombre}</td>
                    <td>{gasto.monto}</td>
                    <td><a href='#' onClick={this.deleteItem}>Borrar</a></td>
                </tr>
            </Fragment>
        );
    }
}

export default ItemGasto;