import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CustomTableCell from '../../components/CustomTableCell'
const style={};

class InfoTable extends Component{

    render(){
        let {rows} = this.props
        if(!rows[0])
            return null;
        return(
            <Table>
                <TableHead>
                    <TableRow>
                        <CustomTableCell>方向</CustomTableCell>
                        <CustomTableCell>名称</CustomTableCell>
                        <CustomTableCell>数量</CustomTableCell>
                        <CustomTableCell>现价</CustomTableCell>
                        <CustomTableCell>涨幅%</CustomTableCell>
                        <CustomTableCell>买量</CustomTableCell>
                        <CustomTableCell>买价</CustomTableCell>
                        <CustomTableCell>卖价</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row)=>(
                        <TableRow>
                            <CustomTableCell>
                                {row&&row.OptionType==='UP'?'买入':'卖出'}
                            </CustomTableCell>
                            <CustomTableCell>
                                {row&&row.optionAbbr}
                            </CustomTableCell>
                            <CustomTableCell>
                                {row&&1}
                            </CustomTableCell>
                            <CustomTableCell>
                                {row&&row.latestPrice}
                            </CustomTableCell>
                            <CustomTableCell>
                                {row&&row.amplitude.toFixed(4)}
                            </CustomTableCell>
                            <CustomTableCell>
                                {row&&row.bidVolume}
                            </CustomTableCell>
                            <CustomTableCell>
                                {row&&row.bidPrice}
                            </CustomTableCell>
                            <CustomTableCell>
                                {row&&row.sellPrice}
                            </CustomTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        )
    }
}

export default InfoTable;