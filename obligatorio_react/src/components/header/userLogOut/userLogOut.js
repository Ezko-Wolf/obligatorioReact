import React, { Component } from 'react';
class UserLogOut extends Component{
    logOut = () => {
        localStorage.clear();
        this.props.handleLogOut();
        this.props.history.replace('/');
    }

    render(){
        return(
            <div className="d-inline-block align-top">
                <p>{this.props.userName}/<a onClick={this.logOut}>LogOut</a></p>                
            </div>
        );
    }
}

export default UserLogOut;