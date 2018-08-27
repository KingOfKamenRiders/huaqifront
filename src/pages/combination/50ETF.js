import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        textAlign:'center',
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const rows = [];

function CustomizedTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <CustomTableCell colSpan={7}>认购</CustomTableCell>
                        <CustomTableCell colSpan={7}>认沽</CustomTableCell>
                    </TableRow>
                    <TableRow>
                        <CustomTableCell>合约代码</CustomTableCell>
                        <CustomTableCell numeric>最新价</CustomTableCell>
                        <CustomTableCell numeric>涨跌幅</CustomTableCell>
                        <CustomTableCell numeric>成交量</CustomTableCell>
                        <CustomTableCell numeric>隐含波动率</CustomTableCell>
                        <CustomTableCell numeric>行权价</CustomTableCell>
                        <CustomTableCell>期权类型</CustomTableCell>

                        <CustomTableCell>合约代码</CustomTableCell>
                        <CustomTableCell numeric>最新价</CustomTableCell>
                        <CustomTableCell numeric>涨跌幅</CustomTableCell>
                        <CustomTableCell numeric>成交量</CustomTableCell>
                        <CustomTableCell numeric>隐含波动率</CustomTableCell>
                        <CustomTableCell numeric>行权价</CustomTableCell>
                        <CustomTableCell>期权类型</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => {
                        return (
                            <TableRow className={classes.row} key={row.id}>
                                <CustomTableCell>1</CustomTableCell>
                                <CustomTableCell numeric>1</CustomTableCell>
                                <CustomTableCell numeric>1</CustomTableCell>
                                <CustomTableCell numeric>1</CustomTableCell>
                                <CustomTableCell numeric>1</CustomTableCell>
                                <CustomTableCell numeric>1</CustomTableCell>
                                <CustomTableCell>1</CustomTableCell>

                                <CustomTableCell>1</CustomTableCell>
                                <CustomTableCell numeric>1</CustomTableCell>
                                <CustomTableCell numeric>1</CustomTableCell>
                                <CustomTableCell numeric>1</CustomTableCell>
                                <CustomTableCell numeric>1</CustomTableCell>
                                <CustomTableCell numeric>1</CustomTableCell>
                                <CustomTableCell>1</CustomTableCell>

                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);