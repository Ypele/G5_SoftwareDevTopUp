import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react'
const Login = props => {
    return (
        <div>
               <Form>
                <Form.Field>
                        <label>Username</label>
                        <input />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input type="password"/>
                    </Form.Field>
                    <Form.Field>
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
        </div>
    );
};

Login.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default Login;