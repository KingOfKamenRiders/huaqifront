import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Grid  from '@material-ui/core/Grid'
import {Chart,Geom,Axis,Tooltip}  from 'bizcharts'
import Paper from '@material-ui/core/Paper'
import {TooltipStyle} from "../../util/ChartStyle"
import {getIncomeChartData} from "../../api/transaction"
import DataSet from '@antv/data-set'

const style = {
    root:{
        width:1000,
    },
    paper:{
        width:1000,
        padding:20
    }
}
const scale = {
    time:{
        tickCount:10,
    },
    income:{
        tickCount:10
    }
}

class IncomeInfo extends Component{

    state = {
        data : [],
        dv:[]
    }
    componentDidMount(){
        getIncomeChartData((response)=>{
            const ds = new DataSet();
            const dv = ds.createView();
            dv.source(response.data)
                .transform({
                    type:'map',
                    callback:(obj)=>{
                        obj.income = obj.value
                        return obj;
                    }
                })
            this.setState({dv:dv});
            console.log(dv);
        })
        // var today = new Date()
        // for(var i = 365;i>=305;i--){
        //     var d = new Date(today-1000*60*60*24*i);
        //     this.state.data.push({time:d.getMonth()+1+'/'+d.getDate(),income:Number((Math.random()).toFixed(2))})
        // }
        // for(var i = 304;i>=224;i--){
        //     var d = new Date(today-1000*60*60*24*i);
        //     this.state.data.push({time:d.getMonth()+1+'/'+d.getDate(),income:.48})
        // }
        // for(var i = 223;i>=100;i--){
        //     var d = new Date(today-1000*60*60*24*i);
        //     this.state.data.push({time:d.getMonth()+1+'/'+d.getDate(),income:Number((2*Math.random()-1).toFixed(2))})
        // }
        // for(var i = 99;i>=50;i--){
        //     var d = new Date(today-1000*60*60*24*i);
        //     this.state.data.push({time:d.getMonth()+1+'/'+d.getDate(),income:.32})
        // }
        // for(var i = 49;i>=0;i--){
        //     var d = new Date(today-1000*60*60*24*i);
        //     this.state.data.push({time:d.getMonth()+1+'/'+d.getDate(),income:Number((2*Math.random()-1).toFixed(2))})
        // }
    }
    render(){
        let {classes} = this.props
        let {dv} = this.state;

        return(
                <Grid container className={classes.root}>
                    <Grid item >
                        <Paper className={classes.paper}>
                            <h3>近期收益</h3>
                            <Chart height={350} forceFit data={dv} padding={['15%','5%']} scale={scale}>
                                <Axis name="time"/>
                                <Axis name="income"/>
                                <Tooltip />
                                <Geom
                                    type="line"
                                    position="time*income"
                                    color="red"
                                    shape="smooth"/>
                            </Chart>
                        </Paper>
                    </Grid>
                </Grid>
        )
    }
}

export default withStyles(style)(IncomeInfo)