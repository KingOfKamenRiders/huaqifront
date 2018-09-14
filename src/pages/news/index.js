import React,{Component} from 'react'
import NewsDemo from './newsDemo'

class News extends Component{
    componentWillMount(){
        this.props.onRouteChange(5);
    }
    render(){
        return(
            <div>
                <NewsDemo></NewsDemo>
            </div>
        )
    }
}

export default News