import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import OverallHq from './OverallHq'
import HqChart from './HqChart'
const style = {

}
class HQ extends Component{
    render(){
        return(
            <div>
                <Grid container spacing={16}>
                    <Grid item>
                        <OverallHq/>
                    </Grid>
                    <Grid>
                        <HqChart/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(style)(HQ)
