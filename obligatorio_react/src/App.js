import React, { Component } from 'react';
import Header from './components/header';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Registro from './components/registro';
import './App.css';
import 'bootstrap-css-only';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      userData : null
      // userData : {        
      //     "usuario": "Gaston24",
      //     "password": "tongas",
      //     "codigo": 200,
      //     "apiKey": "9f4251b00f6905fc25f4fecce0cc68b3",
      //     "id": "77"
      // }      
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
      <div className="App">
        <Header userName = { userData && userData.usuario ? userData.usuario : ''}/>
        <main>
          <Registro/>
          <br/><br/><br/>
          {userData === null ? <Login handleLogin={this.handleLogin}/> : <Dashboard/>}
        </main>
      </div>
    );
  }
}

export default App;
