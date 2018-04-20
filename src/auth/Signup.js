import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

class Signup extends React.Component {
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
        fetch('http://localhost:3000/create_user', {
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
                <h1>Signup</h1>
                <Form>
                    <FormGroup row>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" placeholder="Type a gnarly username" required onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" placeholder="Type a password you won't forget" required onChange={this.handleChange}/>
                    </FormGroup>
                    <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
                </Form>
            </div>


            
        )
    }
}

export default Signup;