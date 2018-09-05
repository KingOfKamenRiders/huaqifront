import React,{Component} from 'react'
import TransactionTable from './TransactionTable'


class Transaction extends Component{
    componentWillMount(){
        this.props.onRouteChange(2);
    }
    render(){
        return(
            <div>
                <TransactionTable></TransactionTable>
            </div>
        )
    }
}

export default Transaction
