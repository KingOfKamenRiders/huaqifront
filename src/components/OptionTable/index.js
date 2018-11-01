import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import CustomTableCell from '../CustomTableCell'
import {Link} from "react-router-dom";


const style =(theme)=>({
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
    root:{
        marginTop:20
    }
})
class OptionTable extends Component{
    state = {
        page:0,
        rowsPerPage:10
    };
    handleChangePage = (e,p)=>{
        this.setState({page:p})
    };
    render(){
        let {rows,classes} = this.props;
        let {page, rowsPerPage} = this.state;
        return(
            <Table className={classes.root}>
                <TableHead>
                    <TableRow>
                        <CustomTableCell>合约代码</CustomTableCell>
                        <CustomTableCell>持仓量</CustomTableCell>
                        <CustomTableCell>卖量</CustomTableCell>
                        <CustomTableCell>卖价</CustomTableCell>
                        <CustomTableCell>买量</CustomTableCell>
                        <CustomTableCell>买价</CustomTableCell>
                        <CustomTableCell>涨幅%</CustomTableCell>
                        <CustomTableCell>现价</CustomTableCell>
                        <CustomTableCell>行权价</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row)=>(
                        <TableRow className={classes.row}>
                            <CustomTableCell>
                                <Link to={"Option/"+row.optionAbbr}>
                                    {row.optionAbbr}
                                </Link>
                            </CustomTableCell>
                            <CustomTableCell>{row.position}</CustomTableCell>
                            <CustomTableCell>{row.sellVolume}</CustomTableCell>
                            <CustomTableCell>{row.sellPrice}</CustomTableCell>
                            <CustomTableCell>{row.bidVolume}</CustomTableCell>
                            <CustomTableCell>{row.bidPrice}</CustomTableCell>
                            <CustomTableCell>{row.amplitude}</CustomTableCell>
                            <CustomTableCell>{row.latestPrice}</CustomTableCell>
                            <CustomTableCell>{row.execPrice}</CustomTableCell>
                        </TableRow>
                    ))}
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

export default withStyles(style)(OptionTable)