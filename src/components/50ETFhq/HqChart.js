import React,{Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import {Chart,Geom,Axis,Tooltip,View}  from 'bizcharts'
import DataSet from '@antv/data-set'
import {getHqChartData} from "../../api/third_party"

const style ={

}
const ds = new DataSet({
    state:{

    }
});
const dv = ds.createView();
function formatDateTime(inputTime) {
    var date = new Date(inputTime);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + "-" + m + "-" + d+" "+h+":"+minute+":"+second;
}

class HqChart extends Component{

    componentDidMount(){
        getHqChartData((response)=>{

            dv.source(response.data['data']['candle']['510050.SS']['lines'])
                .transform({
                    type:'map',
                    callback(row){
                        return(
                            {
                                open_px:row[0],
                                close_px:row[1],
                                high_ox:row[2],
                                low_px:row[3],
                                turnover_volume:row[4],
                                time:formatDateTime(row[5]),
                            }
                        )
                    }
                })
        })
    }
    render(){
        return(
            <div>
                <Chart>
                    <View height={300} data={dv}>
                        <Axis name="time"/>
                        <Axis name="low_px"/>
                        <Geom type="line"
                            position="time*low_px"/>
                    </View>
                    <View height={100} data={dv}>

                    </View>
                </Chart>
            </div>
        )
    }
}

export default withStyles(style)(HqChart);