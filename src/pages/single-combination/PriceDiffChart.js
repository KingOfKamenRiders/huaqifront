import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {Chart,Geom,Axis,Tooltip}  from 'bizcharts'
import {getDifferenceChartData} from "../../api/Combination"

const style={};
const scale = {
    time:{
        tickCount:10,
    },
}
class PriceDiffChart extends Component{

    componentWillMount(){
        let {ou1,od1,od2,ou2} = this.props
        getDifferenceChartData(ou1,od1,od2,ou2,
            (response)=>{
            this.setState({data:response.data})
            })
    }
    state = {
        data:[],
    }

    render(){
        return(
            <Chart height={350} forceFit data={this.state.data}  padding={['15%','5%']} scale={scale}>
                <Axis name="time"/>
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

export default withStyles(style)(PriceDiffChart)