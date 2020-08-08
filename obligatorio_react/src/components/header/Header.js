import logo from './gastos.svg'
import React, { Component } from 'react';

class Header extends Component{
    
    render() {
        return (
            <header className="App-header">
                <h1>Control Gastos</h1>
                <img src={logo} className="App-logo" alt="logo" />                
            </header>
        );
    }
}

export default Header;