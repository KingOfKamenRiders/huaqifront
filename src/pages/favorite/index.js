import React,{Component} from 'react'
import OptionTable from '../../components/OptionTable'
import {withStyles}  from '@material-ui/core/styles'
import CombinationTable from '../../components/CombinationTable'
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import {findInterestedOptions} from "../../api/Option"
import {getInterestedComb} from "../../api/Combination"
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import StarIcon from "@material-ui/core/SvgIcon/SvgIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Divider from "@material-ui/core/Divider/Divider";
import CircularProgress from '@material-ui/core/CircularProgress';


const style ={
    loading:{
        position:'absolute',
        left:'50%',
        top:'20%'
    }
}
class Combination extends Component{
    componentWillMount(){
        this.props.onRouteChange(4);
        getInterestedComb((response)=>{
            console.log(response.data)
            this.setState({combinations:response.data})
            console.log(this.state.combinations)
            this.setState({hideLoading_combin:true})
            }
        ,(error)=>console.log(error));
        findInterestedOptions((response)=>{
            this.setState({options:response.data})
            this.setState({hideLoading_single:true})
        })
    }
    state={
      combinations:[],
        options:[],
        single:false,
        combin:true,
        hideLoading_single:false,
        hideLoading_combin:false,
    };
    showSingle=()=>{
        this.setState({single:false,combin:true});
    };
    showConmbinations=()=>{
        this.setState({combin:false,single:true});
    };
    render(){
        let {classes} = this.props;
        let {combinations,options,single,combin}= this.state;
        return(
            <Grid container spacing={16}>
                <Grid item xs={2}>
                    <Paper style={{marginTop:20}}>
                        <List>
                            <ListItem button onClick={this.showSingle}>
                                <ListItemIcon>
                                    <StarIcon/>
                                </ListItemIcon>
                                <ListItemText primary="单个期权" />
                            </ListItem>
                            <ListItem button onClick={this.showConmbinations}>
                                <ListItemIcon>
                                    <StarIcon />
                                </ListItemIcon>
                                <ListItemText primary="期权组合"/>
                            </ListItem>
                        </List>
                        <Divider />
                    </Paper>
                </Grid>
                <Grid item xs={10}>
                    <Paper hidden={this.state.single}>
                        <CircularProgress className={classes.loading} size={120} hidden={this.state.hideLoading_single}/>
                        <OptionTable rows={options}/>
                    </Paper>
                    <Paper hidden={this.state.combin} style={{marginTop:20}}>
                        <CircularProgress className={classes.loading} size={120} hidden={this.state.hideLoading_combin}/>
                        <CombinationTable rows={combinations?combinations:[]}/>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}


export default withStyles(style)(Combination)
