import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Redirect,Switch} from  'react-router-dom'
import NavTop from './components/nav-top'
import Index from './pages/index'
import Rank from './pages/rank'
import Transaction from './pages/transactions'
import Combination from './pages/combination'
import Favorite from './pages/favorite'
import News from './pages/news'
import Option from './pages/Option'
import SingleCombination from './pages/single-combination'
import PersonalCenter from './pages/personal-center'
import Cover from './pages/cover'

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
            <Switch>
            <Route   path="/content">
                <div>
                    <NavTop getInstance={(child)=>this.navTopRef=child} user={user}  onRouteChange={this.handleRouteChange} tabValue={this.state.tabValue} openLogin={this.state.openLogin}/>
                    <Switch>

                    <Route  path="/content/rank"  render={()=>{return <Rank onRouteChange={this.handleRouteChange}/>}}/>
                    <Route path="/content/transaction"  render={()=>{
                        if(!user){
                            this.navTopRef.setLoginModal(true);
                            return <Redirect to="/content" exact/>
                        }
                        return <Transaction onRouteChange={this.handleRouteChange}/>}}/>
                    <Route path="/content/combination"  render={()=>{
                        if(!user){
                            this.navTopRef.setLoginModal(true);
                            return <Redirect to="/content" exact/>
                        }
                        return <Combination onRouteChange={this.handleRouteChange}/>}}/>
                    <Route path="/content/favorite"  render={()=>{
                        if(!user){
                            this.navTopRef.setLoginModal(true);
                            return <Redirect to="/content" exact/>
                        }
                        return <Favorite onRouteChange={this.handleRouteChange}/>}}/>
                    <Route path="/content/news"  render={()=>{return <News onRouteChange={this.handleRouteChange}/>}}/>
                    <Route path="/content/option/:id" component={Option}/>
                    <Route path="/content/single-combination/:optUp1/:optDown1/:optDown2/:optUp2" component={SingleCombination}/>
                    <Route path="/content/personal-center" component={PersonalCenter}/>
                        <Route  path="/content/"  render={()=>{return <Index onRouteChange={this.handleRouteChange}/>}} />
                    </Switch>
                </div>
            </Route>
                <Route exact path="/" component={Cover}/>
            </Switch>

        </Router>
    );
  }
}

export default App;
