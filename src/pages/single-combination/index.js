import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InfoTable from './InfoTable'
import PriceDiffChart from "./PriceDiffChart";
import {getCombinationByID} from "../../api/Combination";


const style={};

class SingleCombination extends Component{

    state={
      combination:null,
    };

    componentDidMount(){
        getCombinationByID(this.props.match.params.id,
            (response)=>this.setState({combination:response.data}))
    }

    render(){
        let {combination} = this.state;
        return(
            <Grid container spacing={16}>
                <Grid item xs={8}>
                    <Paper>
                        <PriceDiffChart/>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <InfoTable rows={[combination.optUp1,combination.optDown1,combination.optDown2,combination.optUp2]}/>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(style)(SingleCombination)