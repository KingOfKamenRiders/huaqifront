import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Drawer from '@material-ui/core/Drawer'

const routes = ['personal-center','/personal-center/person-info']

const style = {
    drawerPaper:{
        position: 'relative',
        width: 240,
    },
    selected:{
        background:'red',
        border:'solid'
    }
}
class SideNav extends Component{

    state = {
        index:0
    }
    handleRouting = (e,i)=>{
        this.setState({index:i})
        console.log(this.state.index)
        let {history,location} = this.props
        history.push(routes[i])

    }
    render(){
        let {classes} = this.props
        return(
            <Drawer variant="permanent" anchor="left" classes={{paper:classes.drawerPaper}}>
                <List component="nav">
                    <ListItem button selected={true} onClick={e=>this.handleRouting(e,0)} classes={{selected:classes.selected}}>
                        <ListItemText primary="收益情况"/>
                    </ListItem>
                    {/*<ListItem button selected={this.state.index === 1} onClick={e=>this.handleRouting(e,1)}>*/}
                        {/*<ListItemIcon>*/}
                            {/*<AccountCircle/>*/}
                        {/*</ListItemIcon>*/}
                        {/*<ListItemText primary="个人信息"/>*/}
                    {/*</ListItem>*/}
                </List>
            </Drawer>
        )
    }
}

export default withRouter(withStyles(style)(SideNav))