import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import {getSnap,getSseSnap} from "../../api/third_party"

const CTC = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const style  = {
    flexColumn:{
        display:'flex',
        flexDirection:'column',
        justifyContent:"center",
        alignItems:'center',
    }
}

class OverallHq extends Component{
    state = {
        newestValue:0,
        turnoverVolume:0,
        turnoverValue:0,
        data:null,
        time:null,
        px_change:0,
        px_change_ratio:0,
        preclose_px:0,
        open_px:0,
        high_px:0,
        low_px:0,
        panKou:[],
        status:null,
    }
    componentDidMount(){
        getSseSnap((response)=>console.log(response.data));
        getSnap((response)=>{
            let hq_str_s_sh510050,hq_str_sh510050;
            eval(response.data);
            let info_1 = hq_str_s_sh510050.split(',');
            let info_2 = hq_str_sh510050.split('.');
            this.setState({newestValue:info_1[1]});
            this.setState({px_change:info_1[2]});
            this.setState({px_change_ratio:info_1[3]});
            this.setState({turnoverValue:info_1[5]});
            this.setState({open_px:info_2[1]});
            this.setState({preclose_px:info_2[2]});
            this.setState({high_px:info_2[4]});
            this.setState({low_px:info_1[2]});
            this.setState({turnoverVolume:info_2[8]});
            for(let i = 10;i<=18;i+=2){
                this.state.panKou.push({buy_v:info_2[i],buy_p:info_2[i+1],sell_v:info_2[i+10],sell_p:info_2[i+11]});
            }
            this.setState({date:info_2[info_2.length-3]});
            this.setState({time:info_2[info_2.length-2]});
            //判断状态
            let now =  new Date();
            let pivots = [];
            for(let i = 0;i<7;i++)
                pivots.push(new Date());
            pivots[0].setHours(9); pivots[0].setMinutes(15);
            pivots[1].setHours(9); pivots[1].setMinutes(25);
            pivots[2].setHours(9); pivots[2].setMinutes(30);
            pivots[3].setHours(11); pivots[3].setMinutes(30);
            pivots[4].setHours(13); pivots[4].setMinutes(0);
            pivots[5].setHours(14); pivots[5].setMinutes(57);
            pivots[6].setHours(15); pivots[6].setMinutes(0);

            const day = now.getDay();
            if(day === 0 || day === 6){
                this.setState({status:'休市'});
            }else{
                if(now<pivots[0]){
                    this.setState({status:'休市'});
                }else if(now>=pivots[0] && now<=pivots[1]){
                    this.setState({status:'开盘集合竞价'});
                }else if(now>pivots[1]&&now<pivots[2]){
                    this.setState({status:'集合竞价结束'});
                }else if(now>=pivots[2] && now<=pivots[3]){
                    this.setState({status:'交易中'});
                }else if(now>pivots[3]&&now<pivots[4]){
                    this.setState({status:'休市'});
                }else if(now>=pivots[4]&&now<pivots[5]){
                    this.setState({status:'交易中'});
                }else if(now>=pivots[5] && now<=pivots[6]){
                    this.setState({status:'收盘集合竞价'});
                }else{
                    this.setState({status:'休市'});
                }
            }

        });
    }
    render(){
        const {flexColumn} = this.props.classes;
        const {panKou} = this.state;
        return(
            <Paper>
                <Grid container>
                    <Grid item xs={12} className={flexColumn}>
                        <Typography variant="title">
                            50ETF(510050)
                        </Typography>
                        <div>
                            <Typography variant="subheading">
                                最新估值
                            </Typography>
                            <Typography variant="title">
                                {this.state.newestValue}
                            </Typography>
                            <div>
                                {this.state.px_change}
                            </div>
                            <div>
                                {this.state.px_change_ratio}
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} container spacing={16}>
                        <Grid xs={3}>
                            <p>成交量</p>
                            <Typography>
                                {this.state.turnoverVolume}手
                            </Typography>
                        </Grid>
                        <Grid xs={3}>
                            <p>成交额</p>
                            <Typography>
                                {this.state.turnoverValue}万元
                            </Typography>
                        </Grid>
                        <Grid xs={3}>
                            <p>状态</p>
                            <Typography>
                                {this.state.state}
                            </Typography>
                        </Grid>
                        <Grid xs={3}>
                            时间
                            <Typography>
                                {this.state.date}
                            </Typography>
                            <Typography>
                                {this.state.time}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <CTC>昨日收盘价</CTC>{this.state.preclose_px}<CTC> </CTC><CTC>今日开盘价</CTC><CTC>{this.state.open_px}</CTC>
                                </TableRow>
                                <TableRow>
                                    <CTC>最高价</CTC>{this.state.high_px}<CTC> </CTC><CTC>最低价</CTC><CTC>{this.state.low_px}</CTC>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </Grid>
                    <Grid item xs={12}>
                        <Table>
                            <TableBody>
                                {panKou.map((value,index)=>(
                                    <TableRow>
                                        <CTC>买{index+1}</CTC>
                                        <CTC>{value.buy_p}</CTC>
                                        <CTC>{value.buy_v}</CTC>
                                        <CTC>卖{index+1}</CTC>
                                        <CTC>{value.sell_p}</CTC>
                                        <CTC>{value.sell_v}</CTC>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

export default withStyles(style)(OverallHq)