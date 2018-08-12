import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from  'react-router-dom'
import NavTop from './components/nav-top'
import Index from './pages/index'
import Rank from './pages/rank'
import Transaction from './pages/transactions'
import Combination from './pages/combination'
class App extends Component {
  state={
    user:null,
  }
  handleUserChange=(newUser)=>this.setState({user:newUser})
  render() {
    const {user} = this.state
    return (
        <Router>
          <div>
              <NavTop user={user} onUserChange={this.handleUserChange}/>
              <Route exact path="/" component={Index}/>
              <Route path="/rank" component={Rank}/>
              <Route path="/transaction" component={Transaction}/>
              <Route path="/combination" component={Combination}/>
          </div>

        </Router>
    );
  }
}

export default App;
