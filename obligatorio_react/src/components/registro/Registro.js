import React, { Component } from 'react';
import 'bootstrap-css-only';

class Registro extends Component {
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
              <br /> <br />
              <label htmlFor="inputPassRepit">Repita su contraseña</label>
              <br />
              <input type="password" name="passRepit" id="inputPassRepit"/>
              <br />
              <button>Resgitrar</button>
            </form>
          </section>
        );
      }
}

export default Registro;