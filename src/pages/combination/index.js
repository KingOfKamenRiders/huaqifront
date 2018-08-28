import React,{Component} from 'react'
import ETF from '../index/50ETF'

class Combination extends Component{
    componentWillMount(){
        this.props.onRouteChange(3);
    }
    render(){
        return(
            <div>
                <ETF></ETF>
            </div>
        )
    }
}

export default Combination
