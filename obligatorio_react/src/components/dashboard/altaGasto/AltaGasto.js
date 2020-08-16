import React, { Component } from 'react';
import {obtenerRubros, altaGasto} from '../../../services/Api';



class AltaGasto extends Component{
    constructor(props){
        super(props);
        this.state = {
            userData : '',
            idRubro : '',
            options : []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSend = this.handleSend.bind(this);
    }

    componentDidMount(){
        let user = JSON.parse(localStorage.getItem('user'));
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
                rubs.rubros.forEach(e => {                         
                    this.setState({
                        options : [...this.state.options, <option value= {e.id} id= {e.id} >{e.nombre}</option>]
                    }) 
                });
            }          
        });
    }

    handleChange(event){
        this.setState({
            idRubro: event.target.value
        });        
    }

    handleSend(){
        //deberia actualizar el state con changes? o puedo obtenerlo directo con js.
        //deberia actualizar el state con el name y el monto o no es necesario y puedo pasarlo a la funcion de la api que registra el gasto?        
        let dataGasto = {
            nombre: document.getElementById('name').value,
            monto: document.getElementById('monto').value,
            idRubro: this.state.idRubro
        }; 
        
        //Agregar validaciones sobre todo la del rubro
        if(dataGasto.nombre == '' || dataGasto.monto == '' || dataGasto.idRubro == ''){
            alert('Tenes que completar los campos');
        }else{
            altaGasto(dataGasto, this.state.userData)
            .then(result =>{
                if(!result){
                    console.log('no se pudo dar el alta');
                }else if(result === -1){
                    alert('Servicio no disponible momentaneamente.');
                }else{          
                    alert(`${result.mensaje} codigo: ${result.idGasto}`);
                    this.props.actualizarGastos();
                }   
            });
        }        
    }

    render(){
        let {options} = this.state; 
        return (
            <div style={{border : 'solid' }}>
                <label name = 'name'>Gasto</label>
                <input type='text' name='name' id='name'/>
                <br/>
                <label name = 'monto'>Monto</label>
                <input type='number' name='monto' id='monto'/>
                <br/>
                <select value = {this.state.idRubro} onChange={this.handleChange} id='listadoRubros'>
                    <option>Seleccione rubro</option>
                    {options}
                </select>
                <br/>
                <button className="btn border" onClick={this.handleSend}>Crear</button>
            </div>
        );
    }
}

export default AltaGasto;