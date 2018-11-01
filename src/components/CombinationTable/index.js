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
import Button from '@material-ui/core/Button'

const style = (theme)=>({
    root:{

    },
    specialFont:{
        borderLeft: '1px solid gainsboro',
        borderRight: '1px solid gainsboro',
        color: '#1a7ad1'
    },
    bigFont:{
        fontSize:18,
        fontWeight:'bold'
    },
    row: {
        '&:nth-of-type(4n+3)': {
            backgroundColor: 'white',
        },
        '&:nth-of-type(4n+4)': {
            backgroundColor: 'white',
        },
    },
})


class CombinationTable extends Component{
    state = {
        page:0,
        rowsPerPage:10
    };
    handleChangePage=(e,p)=>{
        this.setState({page:p})
    };
    render(){
        let {classes, rows}= this.props;
        let {page,rowsPerPage} = this.state;
        return(
            <Table className={classes.root}>
                <TableHead>
                        <TableRow>
                            <CustomTableCell rowSpan={2} colSpan={1} className={classes.bigFont}>组合</CustomTableCell>
                            <CustomTableCell colSpan={8} className={classes.bigFont}>认购</CustomTableCell>
                            <CustomTableCell colSpan={1}> </CustomTableCell>
                            <CustomTableCell colSpan={8} className={classes.bigFont}>认沽</CustomTableCell>
                            <CustomTableCell rowSpan={2} className={classes.bigFont}>价差</CustomTableCell>
                            <CustomTableCell rowSpan={2} className={classes.bigFont}>详情</CustomTableCell>
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
                    {rows.slice((page)*rowsPerPage,(page+1)*rowsPerPage).map((row,index)=>{
                        let ou1 = row.optUp1.optionAbbr,od1 = row.optDown1.optionAbbr,ou2 = row.optUp2.optionAbbr, od2 = row.optDown2.optionAbbr
                        return([
                            <TableRow className={classes.row} >
                                <CustomTableCell rowSpan={2}>{index+1+(page)*rowsPerPage}</CustomTableCell>
                                <CustomTableCell><Link to={"Option/"+row.optUp1.optionAbbr}>{row.optUp1.optionAbbr}</Link></CustomTableCell> <CustomTableCell>{row.optUp1.position}</CustomTableCell>
                                <CustomTableCell>{row.optUp1.sellVolume}</CustomTableCell> <CustomTableCell>{row.optUp1.sellPrice}</CustomTableCell>
                                <CustomTableCell>{row.optUp1.bidVolume}</CustomTableCell> <CustomTableCell>{row.optUp1.bidPrice}</CustomTableCell>
                                <CustomTableCell>{row.optUp1.amplitude.toFixed(4)}</CustomTableCell> <CustomTableCell>{row.optUp1.latestPrice}</CustomTableCell>
                                <CustomTableCell className={classes.specialFont}>
                                    {row.optUp1.execPrice}
                                </CustomTableCell>
                                <CustomTableCell>{row.optDown1.latestPrice}</CustomTableCell> <CustomTableCell>{row.optDown1.amplitude.toFixed(4)}</CustomTableCell>
                                <CustomTableCell>{row.optDown1.bidPrice}</CustomTableCell> <CustomTableCell>{row.optDown1.bidVolume}</CustomTableCell>
                                <CustomTableCell>{row.optDown1.sellPrice}</CustomTableCell> <CustomTableCell>{row.optDown1.sellVolume}</CustomTableCell>
                                <CustomTableCell>{row.optDown1.position}</CustomTableCell> <CustomTableCell><Link to={"Option/"+row.optDown1.optionAbbr}>{row.optDown1.optionAbbr}</Link></CustomTableCell>
                                <CustomTableCell rowSpan={2}>{row.difference.toFixed(4)} </CustomTableCell>
                                <CustomTableCell rowSpan={2}> <Button color="secondary" variant="contained" component={Link} to={"single-combination/"+ou1+"/"+od1+"/"+od2+"/"+ou2}>详情</Button></CustomTableCell>
                            </TableRow>,
                            <TableRow className={classes.row}>
                                <CustomTableCell><Link to={"Option/"+row.optUp2.optionAbbr}>{row.optUp2.optionAbbr}</Link></CustomTableCell> <CustomTableCell>{row.optUp2.position}</CustomTableCell>
                                <CustomTableCell>{row.optUp2.sellVolume}</CustomTableCell> <CustomTableCell>{row.optUp2.sellPrice}</CustomTableCell>
                                <CustomTableCell>{row.optUp2.bidVolume}</CustomTableCell> <CustomTableCell>{row.optUp2.bidPrice}</CustomTableCell>
                                <CustomTableCell>{row.optUp2.amplitude.toFixed(4)}</CustomTableCell> <CustomTableCell>{row.optUp2.latestPrice}</CustomTableCell>
                                <CustomTableCell className={classes.specialFont}>
                                    {row.optUp1.execPrice}
                                </CustomTableCell>
                                <CustomTableCell>{row.optDown2.latestPrice}</CustomTableCell> <CustomTableCell>{row.optDown2.amplitude.toFixed(4)}</CustomTableCell>
                                <CustomTableCell>{row.optDown2.bidPrice}</CustomTableCell> <CustomTableCell>{row.optDown2.bidVolume}</CustomTableCell>
                                <CustomTableCell>{row.optDown2.sellPrice}</CustomTableCell> <CustomTableCell>{row.optDown2.sellVolume}</CustomTableCell>
                                <CustomTableCell>{row.optDown2.position}</CustomTableCell> <CustomTableCell><Link to={"Option/"+row.optDown2.optionAbbr}>{row.optDown2.optionAbbr}</Link></CustomTableCell>
                            </TableRow>
                        ])
                    })}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination rowsPerPage={rowsPerPage} page={page} count={rows.length} rowsPerPageOptions={[]}
                                         onChangePage={this.handleChangePage}/>
                    </TableRow>
                </TableFooter>
            </Table>
        )
    }
}

export default withStyles(style)(CombinationTable)