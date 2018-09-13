import React,{Component} from 'react'
import styles from './index.css'
import Index from "./index";
import axios from "axios/index";
import {getTargets} from "../../api/Option";

class IndividualCount extends Component{
    state={
        result: {},
    };
    componentDidMount(){
        getIndividualCount((response)=>{this.setState({result: response.data})})
    }
    render(){
        const {result} = this.state;
        return(
            <div className="section">
                <div className="cols col-3">
                    <div className="col col1 block">
                        <h2 className="heading h2">总收益</h2>
                        <h3 className="account">元</h3>
                    </div>
                    <div className="col col2 block">
                        <h2 className="heading h2">昨日收益</h2>
                        <h3 className="yesterday">元</h3>
                    </div>
                    <div className="col col3 block">
                        <h2 className="heading h2">账户资产</h2>
                        <h3 className="balances">元</h3>
                        {/*<h3 className="balances">{result.balances}元</h3>*/}
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