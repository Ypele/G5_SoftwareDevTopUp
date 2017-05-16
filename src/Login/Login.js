import React, { Component } from 'react';
import {login, resetPassword} from '../data/api/auth'
import { Button, Form } from 'semantic-ui-react'
import {LoginWrapper} from './styles'
function Message(msg){
    return{
        loginResult:msg
    }
}
class Login extends Component {
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
             <Form onSubmit={this.submitHandler}>
                <Form.Field>
                    <label>Username</label>
                    <input ref={(email) => this.email = email} />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type="password" ref={(pass) => this.pass = pass} />
                </Form.Field>
                <Form.Field>
                    {this.state.loginResult}
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
            
            </LoginWrapper>
        );
    }
}



export default Login;