import React,{Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import {findAllTransactions} from "../../api/transaction";
import {Link} from "react-router-dom";
import TablePagination from "@material-ui/core/TablePagination/TablePagination";
import TableFooter from "@material-ui/core/TableFooter/TableFooter";

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

let id = 0;
//排序
function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

class Trans extends Component{
    state = {
        trans:[],
        page:0,
        rowsPerPage:10,
        order: 'asc',
        orderBy: 'calories',
    }

    componentDidMount(){
        let userId = sessionStorage.getItem('user')
        console.log(userId)
        findAllTransactions('Default',(response)=>{
            console.log(response.data)
            this.setState({trans:response.data})
        },(error)=>console.log(error))
        // console.log(this.state.trans)
    }

    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = 'desc';

        if (this.state.orderBy === property && this.state.order === 'desc') {
            order = 'asc';
        }

        this.setState({ order, orderBy });
    };

    handleChangePage=(e,p)=>{
        this.setState({page:p})
    }

    render(){
        const {trans,order, orderBy,rowsPerPage,page} = this.state
        const {classes} = this.props
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead order={order} orderBy={orderBy} onRequestSort={this.handleRequestSort}>
                        <TableRow>
                            <TableCell>时间</TableCell>
                            <TableCell>名称</TableCell>
                            <TableCell>交易类型</TableCell>
                            <TableCell>下单类型</TableCell>
                            <TableCell numeric>
                                成交数量
                            </TableCell>
                            <TableCell numeric>成交价</TableCell>
                            <TableCell numeric>成交额</TableCell>
                            <TableCell numeric>手续费</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {trans
                            .sort(getSorting(order, orderBy))
                            .slice((page)*rowsPerPage,(page+1)*rowsPerPage).map(row => {
                            return (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.time}
                                    </TableCell>
                                    <TableCell>{row.optionAbbr}</TableCell>
                                    <TableCell>{row.transactionType}</TableCell>
                                    <TableCell>{row.transactionDirection}</TableCell>
                                    <TableCell numeric>{row.quantity}</TableCell>
                                    <TableCell numeric>{row.price}</TableCell>
                                    <TableCell numeric>{row.sum}</TableCell>
                                    <TableCell numeric>{row.fee}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                count={trans.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                rowsPerPageOptions={[]}
                                onChangePage={this.handleChangePage}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </Paper>
        );
    }
}

// Trans.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Trans);