import logo from './gastos.svg'
import React, { Component } from 'react';
import UserLogOut from './userLogOut'

const styles = { width : '100%' }

class Header extends Component{
    
    render() {
        return (
            // <header className="App-header">
            //     <h1>Control Gastos</h1>
            //     <img src={logo} className="App-logo" alt="logo" />                
            // </header>

            <header className="App-header">
            <nav className="navbar navbar-dark bg-dark" style={styles}>
            <a class="navbar-brand" href="#">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" loading="lazy" />
                Control Gastos
            </a>
            {this.props.userName ? <UserLogOut userName = {this.props.userName}/> : ''}            
            </nav>
            </header>
        );
    }
}

export default Header;