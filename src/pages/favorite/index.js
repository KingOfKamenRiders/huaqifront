import React,{Component} from 'react'
import collection from '../combination/combinationTable'

class Combination extends Component{
    componentWillMount(){
        this.props.onRouteChange(3);
    }
    render(){
        return(
            <div>
                <collection></collection>
            </div>
        )
    }
}

export default Combination
