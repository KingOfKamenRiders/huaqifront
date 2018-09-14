import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const drawerWidth = 240;

const style ={
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },

    itemText:{
        fontSize:20
    }

}

class SideNav extends Component{
    render(){
        const {classes} = this.props
        return(
            <Drawer variant="permanent" component="nav" classes={{
                paper:classes.drawerPaper
            }}>
                <List>
                    <ListItem button >
                        <ListItemText primary="50ETF" classes={{primary:classes.itemText}}/>
                    </ListItem>
                </List>
            </Drawer>)
    }
}

export default withStyles(style)(SideNav)