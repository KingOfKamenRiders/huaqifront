import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListItem from "@material-ui/core/ListItem/ListItem";

const drawerWidth = 240;

const styles ={
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    itemText:{
        fontSize:16
    }

}

class SideNav extends Component {
    render() {
        const {classes} = this.props
        return (
            <Drawer
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <List>
                    <ListItem button >
                        <ListItemText primary="单个期权" classes={{primary:classes.itemText}}/>
                    </ListItem>
                    <ListItem button >
                        <ListItemText primary="期权组合" classes={{primary:classes.itemText}}/>
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
        );
    }
}

export default withStyles(styles)(SideNav);