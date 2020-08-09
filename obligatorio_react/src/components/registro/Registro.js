import React, { Component } from 'react';
import 'bootstrap-css-only';
import {registro} from '../../services/Api';

const styles = { width: "22em", margin: "0 auto", marginTop: 10 }

class Registro extends Component {

  constructor(props){
    super(props);
    this.state = {
      userName : null,
      pass : null,
      passAux : null
    };
  }

  handleChange = e => {
    if(e.target.id == 'userName'){
      this.setState({
        userName: e.target.value
      });
    }else if(e.target.id == 'pass'){
      this.setState({
        passAux: e.target.value
      });
    }else if(e.target.id == 'passRepit'){
      if(this.state.passAux === e.target.value){
        this.setState({
          pass: e.target.value
        });
      }    
    }   
    console.info(this.state);
  };

  handleRegister = e => {
    e.preventDefault();
    const { userName, pass } = this.state;
    console.info(e);

    if (userName === null || userName === "" || pass === null || pass === "") {
      alert("Completa los campos o confirma la contraseña.");
    } else {
      registro({ userName, pass })
        .then(usr => {
          if(usr === 409){
            alert('Usuario ya existente.');
          }else if(usr === -1){
            alert('Servicio no disponible momentaneamente.');
          }else{
            alert('Registrado correctamente.');
            console.info(usr);
          }          
        }
      );      
    }
  };

  render() {
    return (
      <div className="card" style={styles}>
        <section className = "card-body">
          <form>
            <label htmlFor="inputEmail">Ingrese su email</label>
            <br />
            <input className="form-control" type="userName" name="userName" id="userName" onChange = {this.handleChange}/>
            <br />
            <label htmlFor="inputPass">Ingrese su contraseña</label>
            <br />
            <input className="form-control" type="password" name="pass" id="pass" onChange = {this.handleChange}/>
            <br />
            <label htmlFor="inputPassRepit">Repita su contraseña</label>
            <br />
            <input className="form-control" type="password" name="passRepit" id="passRepit" onChange = {this.handleChange}/>
            <br />
            <button className="btn btn-primary" onClick={this.handleRegister}>Resgitrar</button>
          </form>
        </section>
      </div>
    );
  }
}

export default Registro;