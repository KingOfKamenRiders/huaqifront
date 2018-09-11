import React,{Component} from 'react'
import TransactionTable from './TransactionTable'
import Trans from './Trans'


class Transaction extends Component{
    componentWillMount(){
        this.props.onRouteChange(2);
    }
    render(){
        return(
            <div>
                {/*<Trans/>*/}
                <TransactionTable></TransactionTable>
            </div>
        )
    }
}

export default Transaction
