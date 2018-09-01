import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DealChart from './DealChart'
import RiseFallChart from './RiseFallChart'

const style={
    root:{
        flexGrow: 1,
        marginTop:8,

    }
}
class Option extends Component{

    render(){
        let {classes}=this.props
        return(
            <div className={classes.root}>
                <Grid container spacing={16}>
                    <Grid item >
                        <Paper>
                            <RiseFallChart/>
                            <DealChart/>
                        </Paper>
                    </Grid>
                    <Grid item >
                        <Paper>

                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(style)(Option)