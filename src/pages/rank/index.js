import React,{Component} from 'react'
import {withStyles}  from '@material-ui/core/styles'
import RankTable from './RankTable'
import SideNav from './SideNav'
import Button from '@material-ui/core/Button'
import CombinationTable from '../../components/CombinationTable'
import {getRankedCombinations} from "../../api/rank"


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
    }
}
class Rank extends Component{
    state={
        combs:[],
    }
    componentWillMount(){
        this.props.onRouteChange(1);
        getRankedCombinations((response)=>{
            this.setState({combs:response.data})
        },(error)=>console.log(error))
    }
    render(){
        const {classes} =this.props
        let {combs} = this.state
        return(
            <div className={classes.root}>
                <SideNav/>
                <main className={classes.content}>
                    <CombinationTable rows={combs}/>
                </main>

            </div>
        )
    }
}

export default withStyles(style)(Rank)
