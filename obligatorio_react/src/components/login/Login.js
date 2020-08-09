import React, { Component } from 'react';
import {login} from '../../services/Api';
import 'bootstrap-css-only';


const styles = { width: "22em", margin: "0 auto", marginTop: 10 }
class Login extends Component {
  constructor (props){
    super(props);
    this.state = {
      userName : null,
      pass : null
    };
  }
  

  handleSend = e => {
    e.preventDefault();
    const { userName, pass } = this.state;

    if (userName === null || userName === "" || pass === null || pass === "") {
      alert("Debes completar los campos");
    } else {
      login({ userName, pass })
        .then(usr => {
          if(!usr){
            alert('Usuario o contraseña incorrecto.');
          }else if(usr === -1){
            alert('Servicio no disponible momentaneamente.');
          }else{
            this.props.handleLogin(usr);
          }          
        }
      );      
    }
  };

  handleChange = e => {
    if(e.target.id == 'userName'){
      this.setState({
        userName: e.target.value
      });
    }else if(e.target.id == 'inputPass'){
      this.setState({
        pass: e.target.value
      });
    }    
  };


  render() {
    const { userName, pass } = this.state;
    return (
      <div className="card" style={styles}>
        <section className = "card-body">
          <form>
            <label htmlFor="userName">Ingrese su usuario</label>
            <br />
            <input type="text" name="userName" id="userName" value = {userName} onChange = {this.handleChange} className="form-control"/>
            <br />
            <label htmlFor="inputPass">Ingrese su contraseña</label>
            <br />
            <input type="password" name="pass" id="inputPass" value = {pass} onChange = {this.handleChange} className="form-control"/>
            <br />    
            <button className="btn btn-primary" onClick={this.handleSend}>Ingresar</button>
          </form>
        </section>
      </div>
    );
  }
}

export default Login;