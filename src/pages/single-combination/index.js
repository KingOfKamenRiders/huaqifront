import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InfoTable from './InfoTable'
import PriceDiffChart from "./PriceDiffChart";
import {getOption} from "../../api/Option"


const style={};

class SingleCombination extends Component{

    state={
      optUp1:null,
      optDown1:null,
      optUp2:null,
      optDown2:null
    };

    componentWillMount(){
        let {optUp1,optDown1,optUp2,optDown2} = this.props.match.params
        getOption(optUp1,(response)=>this.setState({optUp1:response.data}));
        getOption(optDown1,(response)=>this.setState({optDown1:response.data}));
        getOption(optUp2,(response)=>this.setState({optUp2:response.data}));
        getOption(optDown2,(response)=>this.setState({optDown2:response.data}));

    }

    render(){
        let {optUp1,optDown1,optUp2,optDown2} = this.state;
        return(
            <Grid container spacing={16}>
                <Grid item xs={8}>
                    <Paper>
                        <PriceDiffChart/>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <InfoTable rows={[optUp1,optDown1,optDown2,optUp2]}/>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(style)(SingleCombination)