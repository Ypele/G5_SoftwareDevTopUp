import React, { Component } from 'react';
import {login, resetPassword} from '../../data/api/auth'
import {LoginWrapper,LoginButtonInv, LoginInput,LoginForm,LoginAdminMessage} from './styles'
function Message(msg){
    return{
        loginResult:msg
    }
}
class AdminLogin extends Component {
    state = {loginResult: ''}
    submitHandler = (e) =>{
        e.preventDefault()
        login(this.email.value,this.pass.value)
        .catch((error) =>{this.setState(Message(error.message))})
        
    }
    resetPassword =()=>{
        resetPassword(this.email.value)
        .then(()=>this.setState(Message('Reset password email sent!')))
        .catch((error)=> this.setState(Message('Email address not found.')))
    }
    render() {
        return (
            <LoginWrapper>
                <LoginAdminMessage> Login as Organizer </LoginAdminMessage>
             <LoginForm onSubmit={this.submitHandler}>
                <div>
                    <label>E-mail</label>
                    <LoginInput ref={(email) => this.email = email} />
                </div>
                <div>
                    <label>Password</label>
                    <LoginInput type="password" ref={(pass) => this.pass = pass} />
                </div>
                <div>
                    {this.state.loginResult}
                </div>
                <LoginButtonInv type='submit'>Login as Organizer</LoginButtonInv>
            </LoginForm>
            
            </LoginWrapper>
        );
    }
}



export default AdminLogin;