import React from 'react';
import './App.css';
import NavBar from './home/Navbar';
import Auth from './auth/Auth';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Splash from './dashboard/Splash';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      sessionToken: "",
      username: ""
    }
  }
  
  setSessionState = (data) => {
    localStorage.setItem('token', data.sessionToken)
    localStorage.setItem('username', data.username)
    this.setState({sessionToken: data.sessionToken, username: data.username});
    console.log('Yay! You showed the username and token! WOOOOOOOOOOOOOOOO!')
  }

  componentWillMount() {
    const token = localStorage.getItem('token')
    if(token && !this.state.sessionToken) {
      this.setState({sessionToken: token});
    }
  }

  protectedViews = () => {
    if(this.state.sessionToken === localStorage.getItem('token')) {
      return (
        <Switch>
          <Route path='/' exact>
            <Splash token={this.state.sessionToken}/>
          </Route>
        </Switch>
      )
    } else {
      return (
        <Route path="/Auth">
          <Auth setToken={this.setSessionState}/>
        </Route>
      )
    }
  }

  logout = () => {
    this.setState({sessionToken: ''});
    this.setState({username: ''});
    localStorage.clear();
  }


  render() {
    console.log(this.state)
    return (
      <Router>
        <div>
          <NavBar logout={this.logout}/>
          {this.protectedViews()}
        </div>
      </Router>
    )
  }
}

export default App;
