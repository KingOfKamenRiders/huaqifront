import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {Chart,Geom,Axis,Tooltip,Util}  from 'bizcharts'


const  style={
    root:{
        border:'solid'
    }
}
class RiseFallChart extends Component{

    state={
        mockData:[
            {
                time:'08:00',
                risefall:0.1
            },
            {
                time:'08:30',
                risefall:0.12
            },
            {
                time:'09:00',
                risefall:0.91
            },
            {
                time:'09:30',
                risefall:0.53
            },
            {
                time:'10:00',
                risefall:0.75
            },
            {
                time:'10:30',
                risefall:0.11
            },
        ]
    }
    render(){

        let {classes}=this.props
        let {mockData} = this.state
        return(
            <Chart height={350} forceFit data={mockData} theme="dark" padding={['15%','5%']}>
                <Axis name="time"/>
                <Axis name="risefall"/>
                <Tooltip/>
                <Geom
                    type="line"
                    position="time*risefall"
                    size={1}
                    color="yellow"
                    shape="smooth"/>
            </Chart>
        )
    }
}

export default withStyles(style)(RiseFallChart)

