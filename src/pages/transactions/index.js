import React,{Component} from 'react'
import {withStyles}  from '@material-ui/core/styles'
import TransactionTable from './TransactionTable'

const style = {

}
class Transaction extends Component{
    componentWillMount(){
        this.props.onRouteChange(2);
    }
    render(){
        return(
            <div>
                <TransactionTable/>
            </div>
        )
    }
}

export default withStyles(style)(Transaction)
