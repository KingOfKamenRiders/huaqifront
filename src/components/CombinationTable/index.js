import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import CustomTableCell from '../../components/CustomTableCell'
import {getOption} from "../../api/Option";

const style ={
    root:{

    },
    specialFont:{
        color:'yellow',
        fontWeight:'bold'
    },
    bigFont:{
        fontSize:18,
        fontWeight:'bold'
    }
}

class CombinationTable extends Component{
    state = {
        page:0,
        rowsPerPage:10
    };
    render(){
        let {classes, rows}= this.props;
        let {page,rowsPerPage} = this.state;
        return(
            <Table className={classes.root}>
                <TableHead>
                        <TableRow>
                            <CustomTableCell rowSpan={2} className={classes.bigFont}>组合</CustomTableCell>
                            <CustomTableCell colSpan={8} className={classes.bigFont}>认购</CustomTableCell> <CustomTableCell colSpan={1}> </CustomTableCell><CustomTableCell colSpan={8} className={classes.bigFont}>认沽</CustomTableCell>
                            <CustomTableCell rowSpan={2} className={classes.bigFont}> term1-term2 </CustomTableCell>
                        </TableRow>
                        <TableRow>
                            <CustomTableCell>合约代码</CustomTableCell> <CustomTableCell>持仓量</CustomTableCell>
                            <CustomTableCell>卖量</CustomTableCell> <CustomTableCell>卖价</CustomTableCell>
                            <CustomTableCell>买量</CustomTableCell> <CustomTableCell>买价</CustomTableCell>
                            <CustomTableCell>涨幅</CustomTableCell> <CustomTableCell>现价</CustomTableCell>
                            <CustomTableCell className={classes.specialFont}>
                                行权价
                            </CustomTableCell>
                            <CustomTableCell>现价</CustomTableCell> <CustomTableCell>涨幅</CustomTableCell>
                            <CustomTableCell>买价</CustomTableCell> <CustomTableCell>买量</CustomTableCell>
                            <CustomTableCell>卖价</CustomTableCell> <CustomTableCell>卖量</CustomTableCell>
                            <CustomTableCell>持仓量</CustomTableCell> <CustomTableCell>合约代码</CustomTableCell>
                        </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row,index)=>{
                        let optUp1,optUp2,optDown1,optDown2;
                        getOption(row.optUp1,(response)=>optUp1=response.data);
                        getOption(row.optUp2,(response)=>optUp2=response.data);
                        getOption(row.optDown1,(response)=>optDown1=response.data);
                        getOption(row.optDown2,(response)=>optDown2=response.data);
                        return(<TableRow key={index+1+(page)*rowsPerPage}>
                            <TableRow>
                                <CustomTableCell>{optUp1.optAbbr}</CustomTableCell> <CustomTableCell>{optUp1.positon}</CustomTableCell>
                                <CustomTableCell>{optUp1.sellVolume}</CustomTableCell> <CustomTableCell>{optUp1.sellPrice}</CustomTableCell>
                                <CustomTableCell>{optUp1.bidVolume}</CustomTableCell> <CustomTableCell>{optUp1.bidPrice}</CustomTableCell>
                                <CustomTableCell>{optUp1.amplitude}</CustomTableCell> <CustomTableCell>{optUp1.latestPrice}</CustomTableCell>
                                <CustomTableCell className={classes.specialFont}>
                                    行权价
                                </CustomTableCell>
                                <CustomTableCell>现价</CustomTableCell> <CustomTableCell>涨幅</CustomTableCell>
                                <CustomTableCell>买价</CustomTableCell> <CustomTableCell>买量</CustomTableCell>
                                <CustomTableCell>卖价</CustomTableCell> <CustomTableCell>卖量</CustomTableCell>
                                <CustomTableCell>持仓量</CustomTableCell> <CustomTableCell>合约代码</CustomTableCell>
                            </TableRow>
                            <TableRow>

                            </TableRow>
                        </TableRow>)
                    })}
                </TableBody>
            </Table>
        )
    }
}

export default withStyles(style)(CombinationTable)