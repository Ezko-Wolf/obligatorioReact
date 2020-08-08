import React, { Component } from 'react';
import 'bootstrap-css-only';

class Login extends Component {
    render() {
        return (
          <section>
            <form>
              <label htmlFor="inputEmail">Ingrese su email</label>
              <br />
              <input type="email" name="email" id="inputEmail"/>
              <br />
              <label htmlFor="inputPass">Ingrese su contraseña</label>
              <br />
              <input type="password" name="pass" id="inputPass"/>
              <br />
              <button>Ingresar</button>
            </form>
          </section>
        );
      }
}

export default Login;