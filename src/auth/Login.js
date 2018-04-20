import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            isEmpty: true
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/login', {
            method: 'POST',
            body: JSON.stringify({user: this.state}),
            headers: new Headers({
                'Content-Type' : 'application/json'
            })
        }).then(response => response.json())
        .then(data => {this.props.setToken(data)})
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" placeholder="Type your username here" required onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" placeholder="Type your password here" required onChange={this.handleChange}/>
                    </FormGroup>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>


        )
    }
}
export default Login;