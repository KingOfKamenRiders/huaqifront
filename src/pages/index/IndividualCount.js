import React,{Component} from 'react'
import styles from './index.css'
import Index from "./index";
import axios from "axios/index";
import {getTargets} from "../../api/Option";

class IndividualCount extends Component{
    state={
        balance: Number,
        income: Number,
        incomeYesterday: Number,
        displayName: 'none',
    };
    componentDidMount(){
        getIndividualCount((response)=>{this.setState({balance: response.data.balance.toFixed(2)})});
        getIncome((response)=>{this.setState({income: response.data.toFixed(2)})});
        getIncomeYesterday((response)=>{this.setState({incomeYesterday: response.data.toFixed(2)})});
        this.display_name();
    };
    display_name() {
        if (sessionStorage.getItem('user')) {
            this.setState({
                displayName: 'block',
            })
        } else {
            this.setState({
                displayName: 'none',
            })
        }
    };
    render(){
        const {balance, income, incomeYesterday, displayName} = this.state;
        return(
            <div className="section" style={{display: displayName}}>
                <div className="cols col--3">
                    <div className="col col1 block">
                        <label className="heading">总收益 :
                            <span className="account">{income}元</span>
                            <span className="nums-up" hidden={income < 0.0 ? true:false}>↑</span>
                            <span className="nums-down" hidden={income > 0.0 ? true:false}>↓</span>
                        </label>

                    </div>

                    <div className="col col2 block">
                        <label className="heading">昨日收益 :
                            <span className="yesterday">{incomeYesterday}元</span>
                            <span className="nums-up" hidden={incomeYesterday > 0 ? false : true}>↑</span>
                            <span className="nums-down" hidden={incomeYesterday < 0 ? false : true}>↓</span>
                        </label>
                    </div>
                    <div className="col col3 block">
                        <label className="heading">账户资产 :
                            <span className="balances">{balance}元</span>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default IndividualCount

function getIndividualCount(callback) {
    axios.get('/UserBl/getUserInfo',{
        params:{
            username:sessionStorage.getItem('user')
        }
    })
        .then((response)=>callback(response))
        .catch((error)=>console.log(error))
}

function getIncome(callback) {
    axios.get('/TransactionBl/calcIncome',{
        params:{
            userId:sessionStorage.getItem('user')
        }
    })
        .then((response)=>callback(response))
        .catch((error)=>console.log(error))
}

function getIncomeYesterday(callback) {
    axios.get('/TransactionBl/calcIncomeYesterday',{
        params:{
            userId:sessionStorage.getItem('user')
        }
    })
        .then((response)=>callback(response))
        .catch((error)=>console.log(error))
}