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
import {getRankedCombinations} from "../../api/rank"
import CustomTableCell from '../../components/CustomTableCell'


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
                                    <CustomTableCell><Link to={"/Option/"+row.optUp1}>{row.optUp1}</Link></CustomTableCell>
                                    <CustomTableCell><Link to={"/Option/"+row.optDown1}>{row.optDown1}</Link></CustomTableCell>
                                    <CustomTableCell><Link to={"/Option/"+row.optUp2}>{row.optUp2}</Link></CustomTableCell>
                                    <CustomTableCell><Link to={"/Option/"+row.optDown2}>{row.optDown2}</Link></CustomTableCell>
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