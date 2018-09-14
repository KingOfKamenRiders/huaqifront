import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Grid  from '@material-ui/core/Grid'
import {Chart,Geom,Axis,Tooltip}  from 'bizcharts'
import Paper from '@material-ui/core/Paper'
import {TooltipStyle} from "../../util/ChartStyle"

const style = {
    root:{
        width:1000,
    },
    paper:{
        width:1000,
    }
}
const scale = {
    time:{
        tickCount:10,
    },
}

class IncomeInfo extends Component{

    state = {
        data : [],
    }
    componentWillMount(){
        var today = new Date()
        for(var i = 365;i>=305;i--){
            var d = new Date(today-1000*60*60*24*i);
            this.state.data.push({time:d.getMonth()+1+'/'+d.getDate(),income:Number((Math.random()).toFixed(2))})
        }
        for(var i = 304;i>=224;i--){
            var d = new Date(today-1000*60*60*24*i);
            this.state.data.push({time:d.getMonth()+1+'/'+d.getDate(),income:.48})
        }
        for(var i = 223;i>=100;i--){
            var d = new Date(today-1000*60*60*24*i);
            this.state.data.push({time:d.getMonth()+1+'/'+d.getDate(),income:Number((2*Math.random()-1).toFixed(2))})
        }
        for(var i = 99;i>=50;i--){
            var d = new Date(today-1000*60*60*24*i);
            this.state.data.push({time:d.getMonth()+1+'/'+d.getDate(),income:.32})
        }
        for(var i = 49;i>=0;i--){
            var d = new Date(today-1000*60*60*24*i);
            this.state.data.push({time:d.getMonth()+1+'/'+d.getDate(),income:Number((2*Math.random()-1).toFixed(2))})
        }
    }
    render(){
        let {classes} = this.props
        console.log(this.state.data)
        return(
                <Grid container className={classes.root}>
                    <Grid item >
                        <Paper className={classes.paper}>
                            <h3>近期收益</h3>
                            <Chart height={350} forceFit data={this.state.data} padding={['15%','5%']} scale={scale}>
                                <Axis name="time"/>
                                <Axis name="income"/>
                                <Tooltip g2-tooltip={TooltipStyle}/>
                                <Geom
                                    type="line"
                                    position="time*income"
                                    size={1}
                                    color="red"
                                    shape="hv"/>
                            </Chart>
                        </Paper>
                    </Grid>
                </Grid>
        )
    }
}

export default withStyles(style)(IncomeInfo)