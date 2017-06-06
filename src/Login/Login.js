import React, { Component } from 'react';
import { loginWithFb,logoutWithFb } from '../data/api/auth'
import { LoginWrapper,LoginButtonsDiv,LoginFBButton } from './styles'
// import FacebookLogin from 'react-facebook-login';
// function Message(msg) {
//     return {
//         loginResult: msg
//     }
// }
class Login extends Component {

    state = { loginResult: '' }
    // submitHandler = (e) => {
    //     e.preventDefault()
    //     login(this.email.value, this.pass.value)
    //         .catch((error) => { this.setState(Message(error.message)) })

    // }

    // resetPassword = () => {
    //     resetPassword(this.email.value)
    //         .then(() => this.setState(Message('Reset password email sent!')))
    //         .catch((error) => this.setState(Message('Email address not found.')))
    // }
    loginWithFb() {
        let user = loginWithFb();
        console.log(user)
    }
    logOut(){
        logoutWithFb();
    }
    responseFacebook(response) {
        console.log(response);
    }
    render() {

        return (
            <LoginWrapper>
                <LoginButtonsDiv>
                <p style={{padding:10,margin:0,color:"white"}}>Welcome to Hell! Muie Daniel</p>
                <LoginFBButton onClick={this.loginWithFb.bind(this)}>Login with Facebook</LoginFBButton>
                </LoginButtonsDiv>
            </LoginWrapper>
        );
    }

}

export default Login