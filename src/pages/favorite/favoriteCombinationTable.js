import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getFavorite} from "../../api/Combination";

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
        marginTop: 10,
        display:'flex',
    },
    table: {
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

const specialStyle = {
    // borderLeft: '1px solid gainsboro',
    // borderRight: '1px solid gainsboro',
    color: '#1a7ad1'
};

let id = 0;

class CustomizedTable extends Component{

    state={
        rows:[],
    }
    componentDidMount(){
        getFavorite((response)=>{this.setState({rows:response.data})})
    }

    render() {
        const {classes} = this.props;
        const {rows} = this.state
        return (
            <Paper>
                <a>收藏的期权数</a>
                <Table>
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
                        {rows.map(() => {
                            return (
                                <TableRow className={classes.row} key={rows.id}>
                                    <CustomTableCell>{rows.optUp.optionAbbr}</CustomTableCell>
                                    <CustomTableCell >{rows.optUp.position}</CustomTableCell>
                                    <CustomTableCell >{rows.optUp.sellVolume}</CustomTableCell>
                                    <CustomTableCell >{rows.optUp.sellPrice}</CustomTableCell>
                                    <CustomTableCell >{rows.optUp.bidVolume}</CustomTableCell>
                                    <CustomTableCell >{rows.optUp.bidPrice}</CustomTableCell>
                                    <CustomTableCell >{rows.optUp.quoteChange.toFixed(4)}</CustomTableCell>
                                    <CustomTableCell >{rows.optUp.latestPrice}</CustomTableCell>

                                    <CustomTableCell >{rows.execPrice}</CustomTableCell>

                                    <CustomTableCell >{rows.optDown.latestPrice}</CustomTableCell>
                                    <CustomTableCell >{rows.optDown.quoteChange.toFixed(4)}</CustomTableCell>
                                    <CustomTableCell >{rows.optDown.bidPrice}</CustomTableCell>
                                    <CustomTableCell >{rows.optDown.bidVolume}</CustomTableCell>
                                    <CustomTableCell >{rows.optDown.sellPrice}</CustomTableCell>
                                    <CustomTableCell >{rows.optDown.sellVolume}</CustomTableCell>
                                    <CustomTableCell >{rows.optDown.position}</CustomTableCell>
                                    <CustomTableCell>{rows.optDown.optionAbbr}</CustomTableCell>

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