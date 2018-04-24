import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

class BikeLogCreate extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            bike: "",
            mileage: "",
            gas: "",
            maintenance: "",
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
        fetch('https://ridelife.herokuapp.com//bikelog', {
            method: 'POST',
            body: JSON.stringify({BikeLog: this.state}),
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization' : this.props.token
            })
        }).then(response => response.json())
        .then(data => {this.props.updateBikesArray()})
    }

    render(){
        return(
            <div>
                <h2>What did you do today?</h2>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="bike">Type of Bike</Label>
                        <Input type="text" name="bike" id="bike" placeholder="Year, Make, and Model" required onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="mileage">Mileage</Label>
                        <Input type="number" name="mileage" id="mileage" placeholder="Enter the mileage of your bike" required onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="gas">How much did you spend on gas?</Label>
                        <Input type="text" name="gas" id="gas" placeholder="$$$" required onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="maintenance">Did you perform any maintenance?</Label>
                        <Input type="textarea" name="maintenance" id="maintenance" placeholder="Enter any maintenance performed." required onChange={this.handleChange}/>
                    </FormGroup>
                    <Button type="submit">Create</Button>
                </Form>  
            </div>
        )
    }
}
export default BikeLogCreate;