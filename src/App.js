import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from  'react-router-dom'
import NavTop from './components/nav-top'
import Index from './pages/index'
import Rank from './pages/rank'
import Transaction from './pages/transactions'
import Combination from './pages/combination'
import Favorite from './pages/favorite'
import News from './pages/news'
import Option from './pages/Option'
class App extends Component {
  state={
    user:null,
    tabValue:null,
  }
  handleUserChange=(newUser)=>this.setState({user:newUser})

  handleRouteChange=(v)=>{
     this.setState({tabValue:v})
  }
  render() {
    const {user} = this.state
    return (
        <Router>
          <div>
              <NavTop user={user} onUserChange={this.handleUserChange} onRouteChange={this.handleRouteChange} tabValue={this.state.tabValue}/>
              <Route exact path="/"  render={()=>{return <Index onRouteChange={this.handleRouteChange}/>}} />
              <Route path="/rank"  render={()=>{return <Rank onRouteChange={this.handleRouteChange}/>}}/>
              <Route path="/transaction"  render={()=>{return <Transaction onRouteChange={this.handleRouteChange}/>}}/>
              <Route path="/combination"  render={()=>{return <Combination onRouteChange={this.handleRouteChange}/>}}/>
              <Route path="/favorite"  render={()=>{return <Favorite onRouteChange={this.handleRouteChange}/>}}/>
              <Route path="/news"  render={()=>{return <News onRouteChange={this.handleRouteChange}/>}}/>
              <Route path="/Option/:id" component={Option}/>
          </div>

        </Router>
    );
  }
}

export default App;
