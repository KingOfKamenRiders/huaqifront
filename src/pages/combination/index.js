import React,{Component} from 'react'

class Combination extends Component{
    componentWillMount(){
        this.props.onRouteChange(3);
    }
    render(){
        return(
            <div>
                this is Combination
            </div>
        )
    }
}

export default Combination
