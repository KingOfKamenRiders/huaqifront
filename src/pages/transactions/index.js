import React,{Component} from 'react'
import TransactionTable from './TransactionTable'

class Transaction extends Component{
    render(){
        return(
            <div>
                <TransactionTable></TransactionTable>
            </div>
        )
    }
}

export default Transaction
