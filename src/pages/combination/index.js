import React,{Component} from 'react'
import COM from '../combination/combinationTable'

class Combination extends Component{
    componentWillMount(){
        this.props.onRouteChange(3);
    }
    render(){
        return(
            <div>
                <a className="heading-a">当前持有的期权合约</a>
                <COM></COM>
            </div>
        )
    }
}

export default Combination
