import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'

const styles={
    root:{
        border:'solid'
    }
}
class DealChart extends Component{
    render(){
        let {classes}=this.props
        return(
            <div className={classes.root}>
                这里是成交图
            </div>
        )
    }
}
export default withStyles(styles)(DealChart)