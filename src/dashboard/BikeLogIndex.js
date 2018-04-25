import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import BikeLogCreate from './BikeLogCreate';
import BikeLogTable from './BikeLogTable';

class BikeLogIndex extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          BikeLog: [],
          updatedPressed: false,
          logToUpdate: {}
        }
      }

    fetchBikeLog = () => {
        console.log(this.props)
        fetch("https://ridelife.herokuapp.com/bikelog", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then(response => response.json())
        .then((logData) => {
            return this.setState({ BikeLog: logData })
        })
    }

    bikeLogDelete = (event) => {
        fetch("https://ridelife.herokuapp.com/bikelog", {
          method: 'DELETE',
          body: JSON.stringify({ BikeLog: { id: event.target.id } }),
          headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
          })
        })
          .then((res) => this.fetchBikeLog())
      }

      bikeLogUpdate = (event, BikeLog) => { 
        fetch("https://ridelife.herokuapp.com/bikelog", {
            method: 'PUT',
            body: JSON.stringify({ log: BikeLog }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token 
            })
        })
            .then((res) => {
                this.setState({ updatePressed: false })
                this.fetchBikeLog();
            })
    }

    setUpdatedWorkout = (event, BikeLog) => {
        this.setState({
            logToUpdate: BikeLog, //2
            updatePressed: true //1
        })
    }

    componentDidMount(){
        this.fetchBikeLog()
    }
    render(){
        const BikeLog = this.state.BikeLog.length >= 1 ?
        <BikeLogTable BikeLog={this.state.BikeLog} delete={this.bikeLogDelete} update={this.setUpdatedBikeLog} /> : <h2>Log a workout to see table</h2>
        return (
            <Container>
                <Row>
                    <Col md="3">
                        <BikeLogCreate token={this.props.token} updateBikesArray={this.fetchBikeLog}/>
                    </Col>
                    <Col md="9">
                        {BikeLog}
                    </Col>
                </Row>
                <Col md="12">  
                    {this.state.updatePressed ? <bikeLogEdit t={this.state.updatePressed} update={this.workoutUpdate} workout={this.state.logToUpdate} /> : <div></div>}
                </Col>
          </Container>
        )
    }
}

export default BikeLogIndex;