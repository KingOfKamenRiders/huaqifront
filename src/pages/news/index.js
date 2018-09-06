import React,{Component} from 'react'

class News extends Component{
    componentWillMount(){
        this.props.onRouteChange(5);
    }
    render(){
        return(
            <div>
                这里是新闻
            </div>
        )
    }
}

export default News