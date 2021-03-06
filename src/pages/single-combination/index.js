import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InfoTable from './InfoTable'
import PriceDiffChart from "./PriceDiffChart";
import {getOption} from "../../api/Option"
import MockTable from '../Option/RiseFallChart'


const style={
    root:{
       // marginLeft:20,
        marginRight:20,
    }
};

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
        let {optUp1 : ou1,optDown1:od1,optUp2:ou2,optDown2:od2} = this.props.match.params
        let {classes} = this.props
        return(
            <Grid container spacing={16} className={classes.root}>
                <Grid item xs={8}>
                    <Paper>
                        <PriceDiffChart ou1={ou1} od1={od1} ou2={ou2} od2={od2}/>
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