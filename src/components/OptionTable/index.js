import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'


const style ={

}
class OptionTable {
    render(){
        return(
            <Table>

            </Table>
        )
    }
}

export default withStyles(style)(OptionTable)