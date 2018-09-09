import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import CustomTableCell from '../CustomTableCell'


const style ={

}
class OptionTable extends Component{
    state = {
        page:0,
        rowsPerPage:10
    };
    handlePageChange = (e,p)=>{
        this.setState({page:p})
    };
    render(){
        let {rows,title} = this.props;
        let {page, rowsPerPage} = this.state;
        return(
            <Table>
                <TableHead>
                    <TableRow>
                        <CustomTableCell>{title}</CustomTableCell>
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
                        <TableRow>
                            <CustomTableCell>{row.optAbbr}</CustomTableCell>
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