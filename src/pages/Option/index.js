import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DealChart from './DealChart'
import RiseFallChart from './RiseFallChart'
import {getOption} from "../../api/Option"
import OptionInfo from './OptionInfo'

const style={
    root:{
        flexGrow: 1,
        marginTop:8,
        padding:10
    }
}
class Option extends Component{

    state={
        option:{}
    }

    componentDidMount(){
        getOption(this.props.match.params.id,
            (response)=>this.setState({option:response.data}))
    }
    render(){
        let {classes}=this.props
        let {option}=this.state
        return(
            <div className={classes.root}>
                <Grid container spacing={16}>
                    <Grid item xs={8}>
                        <Paper>
                            <RiseFallChart/>
                            <RiseFallChart/>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper>
                            <OptionInfo option={option}/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(style)(Option)