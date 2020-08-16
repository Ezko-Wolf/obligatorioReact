import React, { Component, Fragment } from 'react';
import 'bootstrap-css-only';

class ItemsComprasRubro extends Component{
    render(){
        const {compras, nombre} = this.props;
        return (
            <Fragment>
            <tr>
                <th scope="row">{nombre}</th>
                <td>{compras}</td>
            </tr>
            </Fragment>
        );
    }
}

export default ItemsComprasRubro;