import React,{Component} from 'react'
import OptionTable from '../../components/OptionTable'
import CombinationTable from '../../components/CombinationTable'
import {getRankedCombinations} from "../../api/rank";

class Combination extends Component{
    componentWillMount(){
        this.props.onRouteChange(4);
        getRankedCombinations((response)=>this.setState({combinations:response.data})
        ,(error)=>console.log(error))
    }
    state={
      combinations:[]
    };
    render(){
        let {combinations}= this.state;
        return(
            <div>
                {/*<CombinationTable rows={combinations}/>*/}
            </div>
        )
    }
}

export default Combination
