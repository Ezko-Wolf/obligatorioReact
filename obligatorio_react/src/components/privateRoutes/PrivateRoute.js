import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

//const user = localStorage.getItem('user');
const PrivateRoute = ({children, ...otras}) => {
    let toRender = null;   
    if(children.type.name === 'Dashboard'){
        toRender = <Route {...otras} render={() => {
                return children.props.user ? children : <Redirect to={{pathname:"/"}}/>
            }}/>
        
    }

    if(children.type.name === 'Registro'){
        toRender = <Route {...otras} render={() => {
                return children.props.user ? <Redirect to={{pathname:"/dashboard"}}/> : children 
            }}/>
        
    }

    // if(children.type.name === 'Login'){
    //     toRender = <Route {...otras} render={() => {
    //             return children.props.user ? <Redirect to={{pathname:"/dashboard"}}/> : children
    //         }}/>
    
    // }
    return toRender; 
};

export default PrivateRoute;