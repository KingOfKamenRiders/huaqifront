import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'

const  style={
    root:{
        width:900,
        height:400,
        border:'solid'
    }
}
class RiseFallChart extends Component{

    render(){
        let {classes}=this.props
        return(
            <div className={classes.root}>
                这里是涨跌图
            </div>
        )
    }
}

export default withStyles(style)(RiseFallChart)

