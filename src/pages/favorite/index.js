import React,{Component} from 'react'
import FAV from '../favorite/favoriteCombinationTable'

class Combination extends Component{
    componentWillMount(){
        this.props.onRouteChange(3);
    }
    render(){
        return(
            <div>
                <FAV></FAV>
            </div>
        )
    }
}

export default Combination
