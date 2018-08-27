import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

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