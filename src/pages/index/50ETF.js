import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getTargets} from "../../api/Option"
import {Link} from "react-router-dom";

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        textAlign:'center',
        padding:5
    },
    body: {
        padding:5,
    }
}))(TableCell);

const styles = theme => ({
    root: {
     //   width: '115%',
        marginTop: 10,
    },
    table: {
     //   Width: 700,
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

const tableStyle = {
    border: '0px',
    width: '100%',
    marginBottom: 20
};

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}


class CustomizedTable extends Component{

    state={
        rows:[],
    };
    componentDidMount(){
        getTargets((response)=>{this.setState({rows:response.data})})
    }

    render() {
        const {classes} = this.props;
        const {rows} = this.state;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table} style={tableStyle} scroll={{ y: 300 }}>
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
                                    <CustomTableCell>
                                        <Link to={"/content/Option/"+row.optUp.optionAbbr}>
                                            {row.optUp.optionAbbr}
                                        </Link>
                                    </CustomTableCell>
                                    <CustomTableCell >{row.optUp.position}</CustomTableCell>
                                    <CustomTableCell >{row.optUp.sellVolume}</CustomTableCell>
                                    <CustomTableCell >{row.optUp.sellPrice}</CustomTableCell>
                                    <CustomTableCell >{row.optUp.bidVolume}</CustomTableCell>
                                    <CustomTableCell >{row.optUp.bidPrice}</CustomTableCell>
                                    <CustomTableCell >{row.optUp.quoteChange.toFixed(4)}</CustomTableCell>
                                    <CustomTableCell >{row.optUp.latestPrice}</CustomTableCell>

                                    <CustomTableCell >{row.execPrice}</CustomTableCell>

                                    <CustomTableCell >{row.optDown.latestPrice}</CustomTableCell>
                                    <CustomTableCell >{row.optDown.quoteChange.toFixed(4)}</CustomTableCell>
                                    <CustomTableCell >{row.optDown.bidPrice}</CustomTableCell>
                                    <CustomTableCell >{row.optDown.bidVolume}</CustomTableCell>
                                    <CustomTableCell >{row.optDown.sellPrice}</CustomTableCell>
                                    <CustomTableCell >{row.optDown.sellVolume}</CustomTableCell>
                                    <CustomTableCell >{row.optDown.position}</CustomTableCell>
                                    <CustomTableCell>
                                        <Link to={"/content/Option/"+row.optDown.optionAbbr}>
                                            {row.optDown.optionAbbr}
                                        </Link>
                                    </CustomTableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);