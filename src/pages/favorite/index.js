import React,{Component} from 'react'
import OptionTable from '../../components/OptionTable'
import CombinationTable from '../../components/CombinationTable'
import {getRankedCombinations} from "../../api/rank";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import {findInterestedOptions} from "../../api/Option"
import {getInterestedComb} from "../../api/Combination"

class Combination extends Component{
    componentWillMount(){
        this.props.onRouteChange(4);
        getInterestedComb((response)=>this.setState({combinations:response.data})
        ,(error)=>console.log(error));
        findInterestedOptions((response)=>this.setState({options:response.data}))
    }
    state={
      combinations:[],
        options:[],
    };
    render(){
        let {combinations,options}= this.state;
        return(
            <Grid container spacing={16}>
                <Grid item xs={3}>
                    <Paper>

                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <Paper>
                        <OptionTable rows={options}/>
                        <CombinationTable rows={combinations}/>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default Combination
