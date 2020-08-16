import React, { Component, Fragment } from 'react';
import 'bootstrap-css-only';

class ItemGastosRubro extends Component{
    
    render(){
        const {monto, nombre} = this.props;
        return (
            <Fragment>
            <tr>
                <th scope="row">{nombre}</th>
                <td>{monto}</td>
            </tr>
        </Fragment>
        );
    }
}

export default ItemGastosRubro;