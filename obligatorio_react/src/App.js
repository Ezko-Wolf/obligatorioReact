import React, { Component } from 'react';
import Header from './components/header';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Registro from './components/registro';
import './App.css';
import 'bootstrap-css-only';

class App extends Component {
    render() {
      return (
        <div className="App">
          <Header />
          <main>
            <Login/>
            <Registro/>
          </main>
        </div>
      );
    }
}

export default App;
