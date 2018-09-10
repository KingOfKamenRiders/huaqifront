import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import CustomTableCell from '../../components/CustomTableCell'
import {getOption} from "../../api/Option";
import Button from '@material-ui/core/Button'

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
                            <CustomTableCell rowSpan={2} colSpan={1} className={classes.bigFont}>组合</CustomTableCell>
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
                        let detail=<Link to={"/single-combination/"+row.cid}/>
                        return([
                            <TableRow>
                                <CustomTableCell rowSpan={2}> {index+1+(page)*rowsPerPage}</CustomTableCell>
                                <CustomTableCell>{row.optUp1.optionAbbr}</CustomTableCell> <CustomTableCell>{row.optUp1.position}</CustomTableCell>
                                <CustomTableCell>{row.optUp1.sellVolume}</CustomTableCell> <CustomTableCell>{row.optUp1.sellPrice}</CustomTableCell>
                                <CustomTableCell>{row.optUp1.bidVolume}</CustomTableCell> <CustomTableCell>{row.optUp1.bidPrice}</CustomTableCell>
                                <CustomTableCell>{row.optUp1.amplitude.toFixed(4)}</CustomTableCell> <CustomTableCell>{row.optUp1.latestPrice}</CustomTableCell>
                                <CustomTableCell className={classes.specialFont}>
                                    {row.optUp1.execPrice}
                                </CustomTableCell>
                                <CustomTableCell>{row.optDown1.latestPrice}</CustomTableCell> <CustomTableCell>{row.optDown1.amplitude.toFixed(4)}</CustomTableCell>
                                <CustomTableCell>{row.optDown1.bidPrice}</CustomTableCell> <CustomTableCell>{row.optDown1.bidVolume}</CustomTableCell>
                                <CustomTableCell>{row.optDown1.sellPrice}</CustomTableCell> <CustomTableCell>{row.optDown1.sellVolume}</CustomTableCell>
                                <CustomTableCell>{row.optDown1.position}</CustomTableCell> <CustomTableCell>{row.optDown1.optionAbbr}</CustomTableCell>
                                <CustomTableCell rowSpan={2}> <Button color="secondary" variant="contained" component={detail}>详情</Button></CustomTableCell>
                            </TableRow>,
                            <TableRow>
                                <CustomTableCell>{row.optUp2.optionAbbr}</CustomTableCell> <CustomTableCell>{row.optUp2.position}</CustomTableCell>
                                <CustomTableCell>{row.optUp2.sellVolume}</CustomTableCell> <CustomTableCell>{row.optUp2.sellPrice}</CustomTableCell>
                                <CustomTableCell>{row.optUp2.bidVolume}</CustomTableCell> <CustomTableCell>{row.optUp2.bidPrice}</CustomTableCell>
                                <CustomTableCell>{row.optUp2.amplitude.toFixed(4)}</CustomTableCell> <CustomTableCell>{row.optUp2.latestPrice}</CustomTableCell>
                                <CustomTableCell className={classes.specialFont}>
                                    {row.optUp1.execPrice}
                                </CustomTableCell>
                                <CustomTableCell>{row.optDown2.latestPrice}</CustomTableCell> <CustomTableCell>{row.optDown2.amplitude.toFixed(4)}</CustomTableCell>
                                <CustomTableCell>{row.optDown2.bidPrice}</CustomTableCell> <CustomTableCell>{row.optDown2.bidVolume}</CustomTableCell>
                                <CustomTableCell>{row.optDown2.sellPrice}</CustomTableCell> <CustomTableCell>{row.optDown2.sellVolume}</CustomTableCell>
                                <CustomTableCell>{row.optDown2.position}</CustomTableCell> <CustomTableCell>{row.optDown2.optionAbbr}</CustomTableCell>

                            </TableRow>
                        ])
                    })}
                </TableBody>
            </Table>
        )
    }
}

export default withStyles(style)(CombinationTable)