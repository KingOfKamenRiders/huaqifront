import React,{Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import {Chart,Geom,Axis,Tooltip,View}  from 'bizcharts'
import DataSet from '@antv/data-set'
import Slider from 'bizcharts-plugin-slider'
import {getKLineData} from "../../api/third_party"

function getComponent(data) {
    const cols={
        time:{
            type:'timeCat',

        },
        open_px:{

        },
        high_px:{

        },
        low_px:{

        },
        latest_px:{

        },
        turnover_volume:{

        },
        turnover_value:{

        }
    }

    const ds =  new DataSet({
        state:{
            start:0,
            end:Number.MAX_SAFE_INTEGER,
        }
    })
    const dv = ds.createView();
    dv.source(data['kline']?data['kline']:[])
        .transform({
            type:'map',
            callback:(row)=>{
                let date = row[0].toString();
                date = date.substring(0,4)+'-'+date.substring(4,6)+'-'+date.substring(6);
                let obj = {
                    time:date,
                    open_px:row[1],
                    high_px:row[2],
                    low_px:row[3],
                    close_px:row[4],
                    turnover_volume:row[5],
                    turnover_value:row[6],
                };
                obj.trend = obj.open_px<=obj.close_px?'上涨':'下跌';
                obj.range = [obj.open_px,obj.close_px,obj.high_px,obj.low_px];

                return obj;
            }
        })
        .transform({
            type:'filter',
            callback:(obj)=>{
                const date = new Date(obj.time);
                return date.getTime() <= ds.state.end && date.getTime() >= ds.state.start;
            }
        })

    class KLineChart extends Component{
        onChange = (obj)=>{
            const {startText,endText,startValue,endValue} = obj;
            ds.setState('start',startValue);
            ds.setState('end',endValue);
        }
        render(){
            return(
                <div>
                    <Chart scale={cols} forceFit height={350} data={dv} padding={[20, 40, 40, 40]}>
                        <Tooltip
                            showTitle={false}
                            itemTpl="<li data-index={index}><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}{value}</li>"
                        />
                        <View data={dv} end={{x:1,y:.8}}>
                            <Axis name="time" />
                            <Axis name="open_px"/>
                            <Geom type="schema"
                                position="time*range"
                                  color={[
                                      "trend",
                                      val => {
                                          if (val === "上涨") {
                                              return "#f04864";
                                          }

                                          if (val === "下跌") {
                                              return "#2fc25b";
                                          }
                                      }
                                  ]}
                                  tooltip={[
                                      "time*open_px*close_px*high_px*low_px",
                                      (time, open_px, close_px, high_px, low_px) => {
                                          return {
                                              name: time,
                                              value:
                                              '<br><span style="padding-left: 16px">开盘价：' +
                                              open_px +
                                              "</span><br/>" +
                                              '<span style="padding-left: 16px">收盘价：' +
                                              close_px +
                                              "</span><br/>" +
                                              '<span style="padding-left: 16px">最高价：' +
                                              high_px +
                                              "</span><br/>" +
                                              '<span style="padding-left: 16px">最低价：' +
                                              low_px +
                                              "</span>"
                                          };
                                      }
                                  ]}
                                  shape="candle"/>
                        </View>
                        <View data={dv} scale={cols} start={{x:0,y:.82}}>
                            <Axis name="time" tickLine={null} label={null} />
                            <Axis name="turnover_volume" visible={false}/>
                            <Geom
                                type="interval"
                                position="time*turnover_volume"
                                color={[
                                    "trend",
                                    val => {
                                        if (val === "上涨") {
                                            return "#f04864";
                                        }

                                        if (val === "下跌") {
                                            return "#2fc25b";
                                        }
                                    }
                                ]}
                                tooltip={[
                                    "time*turnover_volume",
                                    (time, volumn) => {
                                        return {
                                            name: time,
                                            value:
                                            '<br/><span style="padding-left: 16px">成交量：' +
                                            volumn +
                                            "手</span><br/>"
                                        };
                                    }
                                ]}
                                shape="candle"
                            />
                        </View>
                    </Chart>
                    <div>
                        <Slider
                            padding={[10, 40, 40, 40]}
                            width="auto"
                            height={26}
                            xAxis="time"
                            yAxis="turnover_volume"
                            scales={{
                                time:{
                                    type:'time'
                                }
                            }}
                            data={dv}
                            onChange={this.onChange}
                        />
                    </div>
                </div>
            );

        }
    }
    return KLineChart;
}

class ChartWrapper extends Component{
    state = {
        data:{}
    }
    componentDidMount(){
        getKLineData((res)=>this.setState({data:res.data}))
    }
    render(){
        const KChart  = getComponent(this.state.data);
        return(
            <div>
                <KChart/>
            </div>
        )
    }
}
export default ChartWrapper