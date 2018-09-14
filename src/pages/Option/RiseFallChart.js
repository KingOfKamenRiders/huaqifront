import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {Chart,Geom,Axis,Tooltip}  from 'bizcharts'
import {getRiseFallChartData} from "../../api/Option"
import {axisStyle} from "../../util/ChartStyle"

const  style={
    root:{
        border:'solid'
    }
}

const scale = {
    time:{
        tickCount:10,
    },
}

class RiseFallChart extends Component{

    componentWillMount(){
        let {optionAbbr}  = this.props
        getRiseFallChartData(optionAbbr,
            (response)=>{
            this.setState({data:response.data})
            })
    }
    state={
        data:[],
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
            <Chart height={350} forceFit data={this.state.data} padding={['15%','5%']} scale={scale}>
                <Axis name="time" />
                <Axis name="value"/>
                <Tooltip/>
                <Geom
                    type="line"
                    position="time*value"
                    size={1}
                    color="red"
                    shape="hv"/>
            </Chart>
        )
    }
}

export default withStyles(style)(RiseFallChart)

