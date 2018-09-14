import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'
import CustomTableCell from '../../components/CustomTableCell'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/AddCircleOutline'
import CreditCard from '@material-ui/icons/CreditCard'
import {addInterestedOption} from "../../api/Option"
import TradeModal from './TradeModal'

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
}
class OptionInfo extends Component{
    state = {
        isTMOpen:false,
    }

    handleCollect=()=>{
        if(!sessionStorage.getItem('user')){
            console.log('请先登陆')
            return
        }
        addInterestedOption(this.props.option.optionAbbr,
            (response)=>{
            if(response.data==='SUCCESS')
                alert('收藏成功')
            else
                alert('未能成功收藏')
            })
    }

    handleTM = ()=>{
        this.setState((prev)=>({isTMOpen:!prev.isTMOpen}))
    }
    render(){
        let {option,classes}=this.props;
        let temp=option.amplitude;
        return(
            <div>
                <Paper className={classes.buttonWrapper}>
                    <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleCollect}>
                        <AddIcon/>
                        收藏
                    </Button>
                    <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleTM}>
                        <CreditCard/>
                        购买
                    </Button>
                    <TradeModal open={this.state.isTMOpen} onClose={this.handleTM} optionAbbr={option&&option.optionAbbr}/>
                </Paper>
                <Table>
                    <TableHead>
                        <CustomTableCell colSpan={4}>{option.optionAbbr}</CustomTableCell>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <CustomTableCell>买量</CustomTableCell>
                            <CustomTableCell>{option.bidVolume}</CustomTableCell>
                            <CustomTableCell>买价</CustomTableCell>
                            <CustomTableCell>{option.bidPrice}</CustomTableCell>
                        </TableRow>
                        <TableRow>
                            <CustomTableCell>卖量</CustomTableCell>
                            <CustomTableCell>{option.sellVolume}</CustomTableCell>
                            <CustomTableCell>卖家</CustomTableCell>
                            <CustomTableCell>{option.sellPrice}</CustomTableCell>
                        </TableRow>
                        <TableRow>
                            <CustomTableCell>最新价</CustomTableCell>
                            <CustomTableCell>{option.latestPrice}</CustomTableCell>
                            <CustomTableCell>持仓量</CustomTableCell>
                            <CustomTableCell>{option.position}</CustomTableCell>
                        </TableRow>
                        <TableRow>
                            <CustomTableCell>涨跌幅</CustomTableCell>
                            <CustomTableCell>{option.quoteChange===undefined?'':option.quoteChange.toFixed(4)}</CustomTableCell>
                            <CustomTableCell>振幅</CustomTableCell>
                            <CustomTableCell>{option.remindedBusinessDays===undefined?'':option.remindedBusinessDays.toFixed(4)}</CustomTableCell>
                        </TableRow>
                        <TableRow>
                            <CustomTableCell>剩余交易日</CustomTableCell>
                            <CustomTableCell>{option.remindedBusinessDays}</CustomTableCell>
                            <CustomTableCell>行权价</CustomTableCell>
                            <CustomTableCell>{option.execPrice}</CustomTableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default withStyles(style)(OptionInfo)