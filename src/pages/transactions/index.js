import React,{Component} from 'react'
import TransactionTable from './TransactionTable'
import Button from '@material-ui/core/Button'
class Transaction extends Component{
    render(){
        return(
            <div>
                <TransactionTable></TransactionTable>
                <button>this is Transaction</button>
            </div>
        )
    }
}

export default Transaction
