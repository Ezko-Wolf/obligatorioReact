import React, { Component, Fragment } from 'react';

class ItemGasto extends Component{
    render(){
        let {gasto} = this.props;
        return (
            <Fragment>
                <tr>
                    <th scope="row">{gasto.id}</th>
                    <td>{gasto.nombre}</td>
                    <td>{gasto.monto}</td>
                    <td>borrar</td>
                </tr>
            </Fragment>
        );
    }
}

export default ItemGasto;