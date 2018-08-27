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
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        textAlign:'center',
    },
    body: {
        fontSize: 14,
    }
}))(TableCell);

const styles = theme => ({
    root: {
        width: '115%',
        marginTop: 10,
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

const specialStyle = {
    borderLeft: '1px solid gainsboro',
    borderRight: '1px solid gainsboro',
    color: '#1a7ad1'
};

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
            <Table className={classes.table} style={{ border: '0px'}}>
                <TableHead>
                    <TableRow>
                        <CustomTableCell colSpan={8}>认购</CustomTableCell>
                        <CustomTableCell colSpan={1}> </CustomTableCell>
                        <CustomTableCell colSpan={8}>认沽</CustomTableCell>
                    </TableRow>
                    <TableRow>
                        <CustomTableCell>合约代码</CustomTableCell>
                        <CustomTableCell numeric>持仓量</CustomTableCell>
                        <CustomTableCell numeric>卖量</CustomTableCell>
                        <CustomTableCell numeric>卖价</CustomTableCell>
                        <CustomTableCell numeric>买量</CustomTableCell>
                        <CustomTableCell numeric>买价</CustomTableCell>
                        <CustomTableCell numeric>涨幅%</CustomTableCell>
                        <CustomTableCell numeric>现价</CustomTableCell>

                        <CustomTableCell style={specialStyle} numeric>行权价</CustomTableCell>

                        <CustomTableCell numeric>现价</CustomTableCell>
                        <CustomTableCell numeric>涨幅%</CustomTableCell>
                        <CustomTableCell numeric>买价</CustomTableCell>
                        <CustomTableCell numeric>买量</CustomTableCell>
                        <CustomTableCell numeric>卖价</CustomTableCell>
                        <CustomTableCell numeric>卖量</CustomTableCell>
                        <CustomTableCell numeric>持仓量</CustomTableCell>
                        <CustomTableCell>合约代码</CustomTableCell>
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
                                <CustomTableCell numeric>1</CustomTableCell>
                                <CustomTableCell numeric>1</CustomTableCell>

                                <CustomTableCell numeric>1</CustomTableCell>
                                <CustomTableCell numeric>1</CustomTableCell>
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