import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import OverallHq from './OverallHq'
import HqChart from './HqChart'
import KLineChart from './KLineChart'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const style = {
    root:{
        margin:'20px 50px'
    },
    chartWrapper:{
        padding:20
    },
    paperContainer:{
       display:'flex',
       justifyContent:'center',

    }
}
class HQ extends Component{
    render(){
        const {root,chartWrapper,paperContainer} = this.props.classes;
        return(
            <div className={root}>
                <Grid container spacing={32} >
                    <Grid item xs={12} >
                        <Paper className={paperContainer}>
                        <OverallHq/>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} >
                        <Paper className={chartWrapper}>
                            <Typography variant="title">
                                分时线
                            </Typography>
                        <HqChart/>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} >
                        <Paper className={chartWrapper}>
                            <Typography variant="title">
                                日K线
                            </Typography>
                        <KLineChart/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(style)(HQ)
