import React, { Component } from 'react';
import {login, resetPassword} from '../data/api/auth'
import { Button, Form } from 'semantic-ui-react'
function Message(msg){
    return{
        loginResult:msg
    }
}
class LoginContainer extends Component {
    state = {loginResult: ''}
    submitHandler = (e) =>{
        e.preventDefault()
        login(this.email.value,this.pass.value).catch((error) =>{this.setState(Message('Error:'+error))
        console.log(error)})
        
    }
    resetPassword =()=>{
        resetPassword(this.email.value)
        .then(()=>this.setState(Message('Reset password email sent!')))
        .catch((error)=> this.setState(Message('Email address not found.')))
    }
    render() {
        return (
            <div>
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
   
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
            </div>
        );
    }
}



export default LoginContainer;