import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'
import TableFooter from '@material-ui/core/TableFooter'

const CustomTableCell = withStyles(theme => ({
    root:{
        textAlign:'center',
    },
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,

        fontSize:28,
        border:'solid black'
    },
    body: {
        fontSize: 20,
    },
}))(TableCell);

class RankTable extends Component {


    render() {
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell colSpan={3}>
                                期权1
                            </CustomTableCell>
                            <CustomTableCell colSpan={3}>
                                期权2
                            </CustomTableCell>
                        </TableRow>
                        <TableRow>
                            <CustomTableCell >
                                代码
                            </CustomTableCell>
                            <CustomTableCell>
                                名称
                            </CustomTableCell>
                            <CustomTableCell>
                                涨跌幅
                            </CustomTableCell>
                            <CustomTableCell >
                                代码
                            </CustomTableCell>
                            <CustomTableCell>
                                名称
                            </CustomTableCell>
                            <CustomTableCell>
                                涨跌幅
                            </CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <CustomTableCell>11</CustomTableCell>
                            <CustomTableCell>11</CustomTableCell>
                            <CustomTableCell>11</CustomTableCell>
                            <CustomTableCell>11</CustomTableCell>
                            <CustomTableCell>11</CustomTableCell>
                            <CustomTableCell>11</CustomTableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>

                    </TableFooter>
                </Table>
            </Paper>
        )
    }
}

export default RankTable