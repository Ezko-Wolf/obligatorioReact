import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';
import 'bootstrap-css-only';
import Header from './components/header';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Registro from './components/registro';
import PrivateRoute from './components/privateRoutes';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      userData : null,
      renderUser: false  
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
      userData: user,
      renderUser:true
    }, () => {
      localStorage.setItem('user', JSON.stringify(user));
    });
  };

  handleLogOut = () => {
    this.setState({
      renderUser:false
    });
  };

  render() {
    const {userData, renderUser} = this.state;
    return (
      <Router>
        <div className="App">
            <Route path='/' render = { (props) => <Header user={userData && userData.usuario} renderUser={renderUser} handleLogOutApp={this.handleLogOut} {...props}/>}/>
          <main>
            
            <Route exact path='/' render = { (props) => <Login handleLogin={this.handleLogin} {...props}/>}/>
            {/* <PrivateRoute exact path='/'>
              <Login handleLogin={this.handleLogin}/>
            </PrivateRoute>  */}
            <PrivateRoute exact path='/registro'>
              <Registro user={userData}/>
            </PrivateRoute> 
            <PrivateRoute exact path='/dashboard'>
              <Dashboard user={userData}/>
            </PrivateRoute>               
          </main>
       </div>
      </Router>
      
    );
  }
}

export default App;
