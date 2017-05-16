import React, { Component } from 'react';
import { authenticate } from '../data/api/auth'
import { Button, Form, Label } from 'semantic-ui-react'
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
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Label>Email</Label>
                    <input ref={(email)=> this.email = email}/>
                    <Label>Password</Label>
                    <input ref={(pass)=> this.pass= pass}/>
                    <div>
                        {
                            this.state.registerMsg &&
                            <div>
                                <span>Error:</span>
                                {this.state.registerMsg}
                            </div>
                        }
                        </div>
                        <Button type="submit">Register</Button>
                </Form>
            </div>
                );
    }
}

export default Register;