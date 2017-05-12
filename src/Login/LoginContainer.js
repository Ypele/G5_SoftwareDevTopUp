import React, { Component } from 'react';
import Login from './Login'
class LoginContainer extends Component {
    onSubmit(){
        //Login()
        //PushBookingPage()
        console.log('Submitted')
    }
    render() {
        return (
            <div>
             <Login onSubmit={this.onSubmit}/>
            </div>
        );
    }
}



export default LoginContainer;