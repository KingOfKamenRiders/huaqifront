import React,{Component} from 'react'
import {withStyles}  from '@material-ui/core/styles'
import SideNav from './SideNav'
import CombinationTable from '../../components/CombinationTable'
import {getRankedCombinations} from "../../api/rank"
import CircularProgress from '@material-ui/core/CircularProgress';

const style=(theme)=>{
    return{
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing.unit * 3,
            minWidth: 0, // So the Typography noWrap works
        },
        root: {
            paddingTop:theme.spacing.unit * 3,
            flexGrow: 1,
            zIndex: 1,
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
        },
        loading:{
            position:'absolute',
            left:'50%',
            top:'20%'
        }
    }
}
class Rank extends Component{
    state={
        combs:[],
        showLoading:{
            display:'block'
        },
        hideLoading:false,
    }
    componentWillMount(){
        this.props.onRouteChange(1);
        getRankedCombinations((response)=>{
            this.setState({combs:response.data})
            this.setState({hideLoading:true})
        },(error)=>console.log(error))
    }
    render(){
        const {classes} =this.props
        let {combs} = this.state
        return(
            <div className={classes.root}>
                <SideNav/>
                <main className={classes.content}>
                    <CircularProgress className={classes.loading} size={120} hidden={this.state.hideLoading}/>
                    <CombinationTable rows={combs}/>
                </main>

            </div>
        )
    }
}

export default withStyles(style)(Rank)
