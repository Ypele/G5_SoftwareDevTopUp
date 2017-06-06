import React, { Component } from 'react';
import { authenticate } from '../data/api/auth'
// import { Button, Form} from 'semantic-ui-react'
import {RegisterWrapper} from './styles'
function Message(msg) {
    return {
        registerMsg: msg.message
    }
}

class Register extends Component {
    state = { registerMsg: '' }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.email.value)
        authenticate(this.email.value, this.pass.value)
            .catch(e => this.setState(Message(e)))
    }
    render() {
        return (
            <RegisterWrapper>
                <form onSubmit={this.handleSubmit}>
                         <div>
                    <label>Email</label>
                    <input ref={(email)=> this.email = email}/>
                    </div> 
                         <div>
                    <label>Password</label>
                    <input ref={(pass)=> this.pass= pass}/>
                    </div>   
                    <div>
                        {
                            this.state.registerMsg &&
                            <div>
                                <span>Error:</span>
                                {this.state.registerMsg}
                            </div>
                        }
                        </div>
                        <button type="submit">Register</button>
                </form>
            </RegisterWrapper>
                );
    }
}

export default Register;