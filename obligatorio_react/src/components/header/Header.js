import logo from './gastos.svg'
import React, { Component } from 'react';
import UserLogOut from './userLogOut'

const styles = { width : '100%' }

class Header extends Component{

    handleLogOut = () => {
        this.props.handleLogOutApp();
    }
    
    render() {    
        return (
            <header className="App-header">
                <nav className="navbar fixed-top navbar-dark bg-dark" style={styles}>
                    <a className="navbar-brand" href="#">
                        <img src={logo} width="30" height="30" className="d-inline-block align-top" loading="lazy" />
                        Control Gastos
                    </a>
                    {this.props.renderUser && this.props.user ? <UserLogOut userName={this.props.user} history={this.props.history} handleLogOut={this.handleLogOut}/> : ''}           
                </nav>
            </header>
        );
    }
}

export default Header;