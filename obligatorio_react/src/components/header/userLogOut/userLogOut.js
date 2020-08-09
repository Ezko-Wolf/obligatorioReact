import React, { Component } from 'react';
class UserLogOut extends Component{
    logOut(){
        
    }

    render(){
        return(
            <div className="d-inline-block align-top" style={{ fontSize : '1.25rem%' }}>
                <p>Nombre/<a onClick='logOut()'>LogOut</a></p>                
            </div>
        );
    }
}

export default UserLogOut;