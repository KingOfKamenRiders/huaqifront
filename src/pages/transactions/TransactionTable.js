import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import {findAllTransactions} from "../../api/transaction"
import TableFooter from "@material-ui/core/TableFooter/TableFooter";
import {Link} from "react-router-dom";
import {findInterestedOptions} from "../../api/Option";

let selectedTids=[];

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

function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

function handleDeleteButton(){
    console.log('Click');
    console.log(selectedTids);
}

const rows = [
    {id: 'time', numeric: false, disablePadding: true, label: '时间' },
    {id: 'optionAbbr', numeric: false, disablePadding: false, label: '名称' },
    {id: 'transactionType', numeric: false, disablePadding: false, label: '交易类型' },
    {id: 'transactionDirection', numeric: false, disablePadding: false, label: '下单类型' },
    {id:'quantity', numeric:true, disablePadding:false, label:'成交数量'},
    {id:'price', numeric:true, disablePadding:false, label:'成交价'},
    {id:'sum', numeric:true, disablePadding:false, label:'成交额'},
    {id:'fee', numeric:true, disablePadding:false, label:'手续费'},
];

class EnhancedTableHead extends React.Component {
    createSortHandler = property => event => {
        this.props.onRequestSort(event, property);
    };

    render() {
        const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;

        return (

            <TableHead>
                <TableRow>
                    {/*<TableCell padding="checkbox">*/}
                        {/*<Checkbox*/}
                            {/*indeterminate={numSelected > 0 && numSelected < rowCount}*/}
                            {/*checked={numSelected === rowCount}*/}
                            {/*onChange={onSelectAllClick}*/}
                        {/*/>*/}
                    {/*</TableCell>*/}
                    {rows.map(row => {
                        return (
                            <TableCell
                                key={row.id}
                                numeric={row.numeric}
                                padding={row.disablePadding ? 'none' : 'default'}
                                sortDirection={orderBy === row.id ? order : false}
                            >
                                <Tooltip
                                    title="Sort"
                                    placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                                    enterDelay={300}
                                >
                                    <TableSortLabel
                                        active={orderBy === row.id}
                                        direction={order}
                                        onClick={this.createSortHandler(row.id)}
                                    >
                                        {row.label}
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                        );
                    }, this)}
                </TableRow>
            </TableHead>
        );
    }
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const toolbarStyles = theme => ({
    root: {
        paddingRight: theme.spacing.unit,
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                // backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                // backgroundColor: theme.palette.secondary.dark,
            },
    spacer: {
        flex: '1 1 100%',
    },
    actions: {
        color: theme.palette.text.secondary,
    },
    title: {
        flex: '0 0 auto',
    },
});

//顶部工具条
let EnhancedTableToolbar = props => {
    const { numSelected, classes } = props;

    return (
        <Toolbar
            className={classNames(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            <div className={classes.title}>
                {/*{numSelected > 0 ? (*/}
                    {/*<Typography color="inherit" variant="subheading">*/}
                        {/*已选 {numSelected} 条交易记录*/}
                    {/*</Typography>*/}
                {/*) : */}

                    <Typography variant="title" id="tableTitle">
                        交易记录
                    </Typography>

                {/*}*/}
            </div>
             <div className={classes.spacer} />


             {/*<div className={classes.actions}>*/}
                 {/*{numSelected > 0 ? (*/}
                     {/*<Tooltip title="Delete">*/}
                         {/*<IconButton aria-label="Delete">*/}
                             {/*<DeleteIcon onClick={handleDeleteButton()}/>*/}
                         {/*</IconButton>*/}
                     {/*</Tooltip>*/}
                {/*) : (*/}
                    {/*<Tooltip title="Filter list">*/}
                        {/*<IconButton aria-label="Filter list">*/}
                            {/*<FilterListIcon />*/}
                        {/*</IconButton>*/}
                    {/*</Tooltip>*/}
                {/*)}*/}
            {/*</div>*/}

        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

class EnhancedTable extends React.Component {
    state = {
        order: 'asc',
        orderBy: 'calories',
        selected: [],
        trans:[],
        page: 0,
        rowsPerPage: 9,
    };

    componentDidMount(){
        findAllTransactions((response)=>this.setState({trans:response.data}))
    }

    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = 'desc';

        if (this.state.orderBy === property && this.state.order === 'desc') {
            order = 'asc';
        }

        this.setState({ order, orderBy });
    };

    handleSelectAllClick = (event, checked) => {
        if (checked) {
            this.setState(state => ({ selected: state.trans.map(n => n.tid) }));
            selectedTids = this.state.selected;
            return;
        }
        this.setState({ selected: [] });
        selectedTids = this.state.selected;
    };

    handleClick = (event, tid) => {
        const {selected} = this.state;
        const selectedIndex = selected.indexOf(tid);
        let newSelected = [];

        if (selectedIndex == -1 && selected.length > 0) {
            //不存在
            newSelected = newSelected.concat(selected,tid);
            // console.log('add ' + newSelected);
        }
        else if(selectedIndex == -1 && selected.length == 0){
            newSelected.push(tid);
            // console.log('add only ' + newSelected)
        }
        //已存在
        else if(selectedIndex > -1 && selected.length == 1){
            newSelected = newSelected.concat(selected.slice(1));
            // console.log('delete the only')
        }
        else if(selectedIndex > -1 && selected.length > 1){
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
            // console.log('deleted ' + newSelected)
        }

        this.setState({ selected: newSelected });
        selectedTids = this.state.selected;
    };

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    // handleDeleteButton=()=>{
    //     this.setState({isDeleteModalOpen:true});
    //     console.log(this.state.selected)
    // };
    //
    // handleDeleteModalClose=()=>{
    //     this.setState({isDeleteModalOpen:false})
    // };

    isSelected = tid => this.state.selected.indexOf(tid) !== -1;

    render() {
        const { classes } = this.props;
        const { trans, order, orderBy, selected, rowsPerPage, page } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, trans.length - page * rowsPerPage);

        return (
            <Paper className={classes.root}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <div className={classes.tableWrapper}>
                    <Table className={classes.table} aria-labelledby="tableTitle">
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={this.handleSelectAllClick}
                            onRequestSort={this.handleRequestSort}
                            rowCount={trans.length}
                        />
                        <TableBody>
                            {stableSort(trans, getSorting(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map(n => {
                                    const isSelected = this.isSelected(n.tid);
                                    return (
                                        <TableRow
                                            hover
                                            onClick={event => this.handleClick(event, n.tid)}
                                            role="checkbox"
                                            aria-checked={isSelected}
                                            tabIndex={-1}
                                            key={n.tid}
                                            selected={isSelected}
                                            // className={classes.row}
                                        >
                                            {/*<TableCell padding="checkbox">*/}
                                                {/*<Checkbox checked={isSelected} />*/}
                                            {/*</TableCell>*/}

                                            <TableCell component="th" scope="row" padding="none">
                                                {n.time.replace('T',' ')}
                                                </TableCell>
                                            <TableCell>
                                                <Link to={"/Option/"+n.optionAbbr}>
                                                    {n.optionAbbr}
                                                </Link>
                                            </TableCell>
                                            <TableCell>
                                                { n.transactionDirection == 'SELL' ? '卖' : '买'}
                                            </TableCell>
                                            <TableCell>
                                                {n.transactionType == 'OPEN' ? '开仓' : '平仓'}{ n.transactionDirection == 'SELL' ? '卖出' : '买入'}
                                            </TableCell>
                                            <TableCell numeric>
                                                {n.quantity.toFixed(4)}
                                            </TableCell>
                                            <TableCell numeric>
                                                {n.price.toFixed(4)}
                                            </TableCell>
                                            <TableCell numeric>
                                                {n.sum.toFixed(4)}
                                            </TableCell>
                                            <TableCell numeric>
                                                {n.fee.toFixed(4)}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 49 * emptyRows }}>
                                    <TableCell colSpan={5} />
                                </TableRow>
                            )}
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
                </div>
            </Paper>
        );
    }
}

const styles = theme => ({
    root: {
        width: '100%',
    },
    table: {
        marginBottom: "0",
        marginLeft:20,
        marginRight:20,
        width: "98%",
        maxWidth: "100%",
        backgroundColor: "transparent",
        borderSpacing: "0",
        borderCollapse: "collapse",
        textAlign:'center',
        fontSize:18,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});

EnhancedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);