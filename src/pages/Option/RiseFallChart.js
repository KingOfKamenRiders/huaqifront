import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {Chart,Geom,Axis,Tooltip} from 'bizcharts'
const  style={
    root:{
        border:'solid'
    }
}
class RiseFallChart extends Component{

    render(){
        let {classes}=this.props
        return(
            <Chart height={250} forceFit>
                <Axis name=""/>
                <Axis name="涨跌幅"/>
            </Chart>
        )
    }
}

export default withStyles(style)(RiseFallChart)

