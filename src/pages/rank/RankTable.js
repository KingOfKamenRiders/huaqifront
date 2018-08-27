import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import {getRankedCombinations} from "../../api/rank"

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

    state = {
        combs:[],
        page:0,
        rowsPerPage:10
    }
    componentDidMount(){
        getRankedCombinations((response)=>{
            this.setState({combs:response.data})
        },(error)=>console.log(error))
    }
    handleChangePage=(e,p)=>{
        this.setState({page:p})
    }
    render() {
        const {combs,rowsPerPage,page} = this.state
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
                            <CustomTableCell>
                                合约排名
                            </CustomTableCell>
                            <CustomTableCell >
                                看涨合约
                            </CustomTableCell>
                            <CustomTableCell>
                                看跌合约
                            </CustomTableCell>
                            <CustomTableCell >
                                看涨合约
                            </CustomTableCell>
                            <CustomTableCell>
                                看跌合约
                            </CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {combs.slice((page)*rowsPerPage,(page+1)*rowsPerPage).map((row,index) =>{
                            return(
                                <TableRow key={index+1+(page)*rowsPerPage}>
                                    <CustomTableCell>{index+1+(page)*rowsPerPage}</CustomTableCell>
                                    <CustomTableCell>{row.optUp1}</CustomTableCell>
                                    <CustomTableCell>{row.optDown1}</CustomTableCell>
                                    <CustomTableCell>{row.optUp2}</CustomTableCell>
                                    <CustomTableCell>{row.optDown2}</CustomTableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination rowsPerPage={rowsPerPage} page={page} count={combs.length} rowsPerPageOptions={[]}
                            onChangePage={this.handleChangePage}/>
                        </TableRow>
                    </TableFooter>
                </Table>
            </Paper>
        )
    }
}

export default RankTable