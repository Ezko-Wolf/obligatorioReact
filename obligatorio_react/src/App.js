import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import 'bootstrap-css-only';
import Header from './components/header';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Registro from './components/registro';
import { registro, login } from './services/Api';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      userData : null  
    };
  }

  componentDidMount(){
    const user = localStorage.getItem('user');
    if(user !== null){
      this.setState({
        userData : JSON.parse(user)
      });
    }
  }

  handleLogin = user => {
    this.setState({
      userData: user
    }, () => {
      localStorage.setItem('user', JSON.stringify(user))
    });
  };

  render() {
    const {userData} = this.state;
    return (
      <Router>
        <div className="App">
          <Header userName = { userData && userData.usuario ? userData.usuario : ''}/>
          <main>
            <Route exact path='/' render = { (props) => <Login handleLogin={this.handleLogin} {...props}/>}/>
            <Route path='/registro' component = {Registro}/>
            <Route exact path='/dashboard' component = {Dashboard}/>
          </main>
       </div>
      </Router>
      
    );
  }
}

export default App;
