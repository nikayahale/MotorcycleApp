import React from 'react';
import {Button, Form, FormGroup, Label, Modal, ModalHeader, ModalBody, Input} from 'reactstrap';

class BikeLogEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            bike: '',
            mileage: '',
            gas: '',
            maintenance: ''
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.BikeLog.id,
            bike: this.props.BikeLog.bike,
            mileage: this.props.BikeLog.mileage,
            gas: this.props.BikeLog.gas,
            maintenance: this.props.BikeLog.maintenance
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log('submit')
        event.preventDefault();
        this.props.update(event, this.state)
    }

    render() {
        return (
            <div>
                <Modal isOpen={true} >
                    <ModalHeader >Log a Workout</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Label for="bike">Type of Bike</Label>
                                <Input id="bike" type="text" name="bike" value={this.state.bike} placeholder="Year, Make, and Model" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="mileage">Mileage</Label>
                                <Input type="number" name="mileage" id="mileage" value={this.state.mileage} onChange={this.handleChange} placeholder="Enter the mileage of your bike" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="gas">How much did you spend on gas?</Label>
                                <Input id="gas" type="text" name="gas" value={this.state.gas} placeholder="$$$" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="maintenance">Did you perform an Maintenance?</Label>
                                <Input type="textarea" name="maintenance" id="maintenance" value={this.state.maintenance} onChange={this.handleChange} placeholder="Enter any maintenance performed" />
                            </FormGroup>
                            <Button type="submit" color="secondary">Update</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default BikeLogEdit;