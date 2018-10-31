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
import {getLine, getSnap, getSseSnap} from "../../api/third_party"

const CTC = withStyles(theme => ({
    body: {
        fontSize: 14,
        textAlign:'center',
        padding:0,
        vAlign:'center',
    },
}))(TableCell);

const style  = {
    flexColumn:{
        display:'flex',
        flexDirection:'column',
        justifyContent:"center",
        alignItems:'center',
        marginBottom:20,
    },
    root:{
        padding:8,
        maxWidth:900
    },
    row:{
        marginBottom:20
    },
    table:{
        width:'100%',
    },
    flex:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    red:{
        color:'red'
    },
    green:{
        color:'green'
    },
    tableRow:{
        borderBottom:'solid #F7148C 2px'
    }
}

class OverallHq extends Component{
    state = {
        latest_px:0,
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
        //getLine((response)=>console.log(response.data));
        getSseSnap((response)=>{
            console.log(response.data)
            let {snap,date,time} = response.data;
            this.setState({preclose_px:snap[1]});
            this.setState({open_px:snap[2]});
            this.setState({high_px:snap[3]});
            this.setState({low_px:snap[4]});
            this.setState({latest_px:snap[5]});
            this.setState({px_change:snap[6]});
            this.setState({px_change_ratio:snap[7]});
            this.setState({turnoverVolume:snap[8]});
            this.setState({turnoverValue:snap[9]});

            let pk = [];
            for(let i=0;i<10;i+=2){
                pk.push({buy_p:snap[13][i],buy_v:snap[13][i+1],sell_p:snap[14][i],sell_v:snap[14][i+1]})
            }
            this.setState({panKou:pk});
            date = date.toString();
            time = time.toString();
            this.setState({date:date.substring(0,4)+'年'+date.substring(4,6)+'月'+date.substring(6)+'日'});
            this.setState({time:time.substring(0,2)+':'+time.substring(2,4)+':'+time.substring(4)});
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
        const {flexColumn,root,row,table,flex,red,green,tableRow} = this.props.classes;
        const {panKou} = this.state;
        return(
            <div className={root}>
                <Grid container>
                    <Grid item xs={12} className={flexColumn}>
                        <Typography variant="display3" gutterBottom>
                            50ETF(510050)
                        </Typography>
                        <div>
                            <Typography variant="title" gutterBottom>
                                最新估值
                            </Typography>
                            <div className={flex}>
                                <Typography variant="title">
                                    {this.state.latest_px}
                                </Typography>
                                <div style={{marginLeft:10}} className={this.state.px_change>0?red:green}>
                                    <div>
                                        {this.state.px_change}
                                    </div>
                                    <div>
                                        {this.state.px_change_ratio}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} container spacing={16} className={row}>
                        <Grid item xs={3}>
                            <Typography variant="title">
                                成交量
                            </Typography>
                            <Typography variant="headline">
                                {this.state.turnoverVolume}手
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="title">
                                成交额
                            </Typography>
                            <Typography variant="headline">
                                {this.state.turnoverValue}万元
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="title">
                                状态
                            </Typography>
                            <Typography variant="headline">
                                {this.state.status}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="title">
                                时间
                            </Typography>
                            <Typography variant="headline">
                                {this.state.date}
                            </Typography>
                            <Typography variant="headline">
                                {this.state.time}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={row}>
                        <Table className={table}>
                            <TableBody>
                                <TableRow className={tableRow}>
                                    <CTC><Typography variant="subheading">昨日收盘价</Typography></CTC>
                                    <CTC><Typography variant="title">{this.state.preclose_px}</Typography></CTC>
                                    <CTC><Typography variant="subheading">今日开盘价</Typography></CTC>
                                    <CTC><Typography variant="title">{this.state.open_px}</Typography></CTC>
                                </TableRow>
                                <TableRow className={tableRow}>
                                    <CTC><Typography variant="subheading">最高价</Typography></CTC>
                                    <CTC><Typography variant="title">{this.state.high_px}</Typography></CTC>
                                    <CTC><Typography variant="subheading">最低价</Typography></CTC>
                                    <CTC><Typography variant="title">{this.state.low_px}</Typography></CTC>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Grid>
                    <Grid item xs={12}>
                        <Table className={table}>
                            <TableBody>
                                {panKou.map((value,index)=>(
                                    <TableRow key={index}>
                                        <CTC><Typography variant="subheading">买{index+1}</Typography></CTC>
                                        <CTC><Typography variant="title" className={red}>{value.buy_p}</Typography></CTC>
                                        <CTC><Typography variant="title">{value.buy_v}</Typography></CTC>
                                        <CTC><Typography variant="subheading">卖{index+1}</Typography></CTC>
                                        <CTC><Typography variant="title" className={red}>{value.sell_p}</Typography></CTC>
                                        <CTC><Typography variant="title">{value.sell_v}</Typography></CTC>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(style)(OverallHq)