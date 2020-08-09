import React, { Component } from 'react';
class UserLogOut extends Component{
    logOut(){
        localStorage.clear();
    }

    render(){
        return(
            <div className="d-inline-block align-top" style={{ fontSize : '1.25rem%' }}>
                <p>{this.props.userName}/<a onClick={this.logOut()}>LogOut</a></p>                
            </div>
        );
    }
}

export default UserLogOut;