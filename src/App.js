import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Redirect} from  'react-router-dom'
import NavTop from './components/nav-top'
import Index from './pages/index'
import Rank from './pages/rank'
import Transaction from './pages/transactions'
import Combination from './pages/combination'
import Favorite from './pages/favorite'
import News from './pages/news'
import Option from './pages/Option'
import SingleCombination from './pages/single-combination'

class App extends Component {

  state={
    tabValue:null,
  };
  constructor(props){
      super(props);
      this.navTopRef = null;
      this.setState({user:sessionStorage.getItem('user')})
  }

  handleRouteChange=(v)=>{
     this.setState({tabValue:v})
  };
  render() {
    const user = sessionStorage.getItem('user');
    return (
        <Router>
          <div>
              <NavTop getInstance={(child)=>this.navTopRef=child} user={user}  onRouteChange={this.handleRouteChange} tabValue={this.state.tabValue} openLogin={this.state.openLogin}/>
              <Route exact path="/"  render={()=>{return <Index onRouteChange={this.handleRouteChange}/>}} />
              <Route path="/rank"  render={()=>{return <Rank onRouteChange={this.handleRouteChange}/>}}/>
              <Route path="/transaction"  render={()=>{
                  if(!user){
                      this.navTopRef.setLoginModal(true);
                      return <Redirect to="/" exact/>
                  }
                  return <Transaction onRouteChange={this.handleRouteChange}/>}}/>
              <Route path="/combination"  render={()=>{
                  if(!user){
                      this.navTopRef.setLoginModal(true);
                      return <Redirect to="/" exact/>
                  }
                  return <Combination onRouteChange={this.handleRouteChange}/>}}/>
              <Route path="/favorite"  render={()=>{
                  if(!user){
                      this.navTopRef.setLoginModal(true);
                      return <Redirect to="/" exact/>
                  }
                  return <Favorite onRouteChange={this.handleRouteChange}/>}}/>
              <Route path="/news"  render={()=>{return <News onRouteChange={this.handleRouteChange}/>}}/>
              <Route path="/option/:id" component={Option}/>
              <Route path="/single-combination/:id" component={SingleCombination}/>
          </div>

        </Router>
    );
  }
}

export default App;
