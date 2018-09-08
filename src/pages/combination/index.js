import React,{Component} from 'react'
import COM from '../combination/combinationTable'
import SideNav from '../combination/SideNav'
import {withStyles} from "@material-ui/core";

const style=(theme)=>{
    return{
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing.unit * 3,
            minWidth: 0,
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

class Combination extends Component{
    componentWillMount(){
        this.props.onRouteChange(3);
    }
    render(){
        const {classes} =this.props
        return(
            <div className={classes.root}>
                <SideNav/>
                <main className={classes.content}>
                    <COM/>
                </main>

            </div>
        )
    }
}

export default withStyles(style)(Combination)
