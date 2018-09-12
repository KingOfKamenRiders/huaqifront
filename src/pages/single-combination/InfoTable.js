import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CustomTableCell from '../../components/CustomTableCell'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import CreditCard from '@material-ui/icons/CreditCard'
import AddIcon from '@material-ui/icons/AddCircleOutline'
import {addInterestedComb} from "../../api/Combination"

const style={
    buttonWrapper:{
        display:'flex',
        flexDirection:'horizon',
        justifyContent:'center'
    },
    button:{
        marginTop:20,
        marginBottom:20,
        marginLeft:20,
        marginRight:20,
    }
};

class InfoTable extends Component{

    handleCollect = ()=> {
        let {rows} = this.props
        if (!sessionStorage.getItem('user')) {
            console.log('请先登陆')
            return
        }
        addInterestedComb(rows[0].optionAbbr, rows[1].optionAbbr, rows[2].optionAbbr, rows[3].optionAbbr,
            (response)=>{
            if(response.data ==='SUCCESS')
                alert('收藏成功')
            else
                alert('未能成功收藏')
            })
    }
    render(){
        let {rows,classes} = this.props
        if(!rows[0])
            return null;
        return(
            <div>
                <Paper className={classes.buttonWrapper}>
                    <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleCollect}>
                        <AddIcon/>
                        收藏
                    </Button>
                    <Button variant="contained" color="secondary" className={classes.button}>
                        <CreditCard/>
                        购买
                    </Button>
                </Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell>方向</CustomTableCell>
                            <CustomTableCell>名称</CustomTableCell>
                            <CustomTableCell>数量</CustomTableCell>
                            <CustomTableCell>现价</CustomTableCell>
                            <CustomTableCell>涨幅%</CustomTableCell>
                            <CustomTableCell>买量</CustomTableCell>
                            <CustomTableCell>买价</CustomTableCell>
                            <CustomTableCell>卖价</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row)=>(
                            <TableRow>
                                <CustomTableCell>
                                    {row&&row.optionType==='UP'?'买入':'卖出'}
                                </CustomTableCell>
                                <CustomTableCell>
                                    {row&&row.optionAbbr}
                                </CustomTableCell>
                                <CustomTableCell>
                                    {row&&1}
                                </CustomTableCell>
                                <CustomTableCell>
                                    {row&&row.latestPrice}
                                </CustomTableCell>
                                <CustomTableCell>
                                    {row&&row.amplitude.toFixed(4)}
                                </CustomTableCell>
                                <CustomTableCell>
                                    {row&&row.bidVolume}
                                </CustomTableCell>
                                <CustomTableCell>
                                    {row&&row.bidPrice}
                                </CustomTableCell>
                                <CustomTableCell>
                                    {row&&row.sellPrice}
                                </CustomTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default withStyles(style)(InfoTable);