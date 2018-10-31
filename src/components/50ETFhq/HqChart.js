import React,{Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import {Chart,Geom,Axis,Tooltip,View}  from 'bizcharts'
import DataSet from '@antv/data-set'
import Slider from 'bizcharts-plugin-slider'
import {getLine} from "../../api/third_party"

const style ={

}


function parseTime(number) {
    let str = number.toString();
    if(str.length<6){
        return ' '+str.substring(0,1)+':'+str.substring(1,3)+':'+str.substring(3);
    }else{
        return str.substring(0,2)+':'+str.substring(2,4)+':'+str.substring(4);
    }
}

function getComponent(data) {
    const cols = {
        time:{
            type:'timeCat',
            formatter:(v)=>{let d = new Date(v);return d.toTimeString().split(' ')[0];}
        },
        volume:{
            alias:'成交量',
        },
        price:{
            alias:'价格',
        }
    };
    const ds =  new DataSet({
        state:{
            start:0,
            end:Number.MAX_SAFE_INTEGER,
        }
    })
    const dv = ds.createView();
    let date = data['date'];
    if(date){
        date = date.toString();
        date = date.substring(0,4)+'-'+date.substring(4,6)+'-'+date.substring(6);
    }else{
        date = '';
    }
    dv.source(data['line']?data['line']:[])
        .transform({
            type:'map',
            callback(row){
                return(
                    {
                        time:date+' '+parseTime(row[0]),
                        price:row[1],
                        volume:row[2],
                    }
                )
            }
        })
        .transform({
            type: "filter",
            callback: obj => {
                const date = new Date(obj.time);
                return date.getTime() <= ds.state.end && date.getTime() >= ds.state.start;
            }
        })
    class HqChart extends Component{

        onChange =  (obj)=>{
            const {startText,endText,startValue,endValue} = obj;
            ds.setState('start',startValue);
            ds.setState('end',endValue);

        }

        render(){
            return(
                <div>
                    <Chart scale={cols} forceFit height={350} padding={[20,40,40,40]}>
                        <Tooltip
                            showTitle={false}
                            itemTpl="<li data-index={index}><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}{value}</li>"
                        />
                        <View  data={dv}  end={{x:1,y:.8}}>
                            <Axis name="time" visible={false}/>
                            <Axis name="price"/>
                            <Geom type="line"
                                  position="time*price"
                                  tooltip={["time*price*volume",
                                      (time,price,volume)=>({
                                          name:time,
                                          value:'<br><span style="padding-left: 16px">价格：' +
                                          price +
                                          "元</span><br/>" +
                                          '<span style="padding-left: 16px">成交量：' +
                                          volume +
                                          "手</span><br/>"
                                      })]}/>
                        </View>
                        <View  data={dv} start={{x:0,y:.82}}>
                            <Axis name="time" />
                            <Axis name="volume" visible={false}/>
                            <Geom type="interval"
                                    position="time*volume"/>
                        </View>
                    </Chart>
                    <div>
                        <Slider width="auto" height={30}
                                xAxis="time" yAxis="volume"
                                padding={[10,40,40,40]}
                                scales={cols}
                                data={dv}
                                onChange={this.onChange}/>
                    </div>
                </div>
            )
        }
    }
    return HqChart;


}

class ChartWrapper extends Component{
    state = {
        data : {}
    }
    componentDidMount(){
        getLine((res)=>this.setState({data:res.data}));
        // setInterval(()=>{
        //     getLine((res)=>this.setState({data:res.data}))
        // },2000)
    }
    render(){
        const Chart = getComponent(this.state.data);
        return(
            <div>
                <Chart/>
            </div>
        )
    }
}

export default ChartWrapper;