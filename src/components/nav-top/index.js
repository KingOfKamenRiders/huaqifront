import React from 'react'
import {withRouter} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar'
import TooBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
import LoginModal from './loginModal'
import SignUpModal from './signUpModal'

const routes=['/','/rank','/transaction','/combination']
const style={
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
}
const theme = createMuiTheme({
    palette: {
        primary: { main: red[500] }, // Purple and green play nicely together.
        secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
    },
});
class NavTop extends React.Component{
    constructor(props){
        super()
        this.state={
            user:props.user,
            tabValue:0,
            isLoginModalOpen:false,
            isSignUpModalOpen:false,
        }
    }
    handleTabChange=(e,value)=>{
        console.log(value);
        this.setState({tabValue:value});
        let {history}=this.props
        history.push(routes[value])
    }
    handleLoginButton=()=>{
        this.setState({isLoginModalOpen:true})
    }
    handleLoginModalClose=()=>{
        this.setState({isLoginModalOpen:false})
    }
    handleSignUpButton=()=>{
        this.setState({isSignUpModalOpen:true})
    }
    handleSignUpModalClose=()=>{
        this.setState({isSignUpModalOpen:false})
    }
    render(){
        const {classes}=this.props;
        const {user}=this.props;
        const {tabValue}=this.state;
        return(
            <div>
                <MuiThemeProvider theme={theme}>
                <AppBar position="static">
                    <TooBar varient="dense">
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            LOGO
                        </Typography>
                        {user
                            ?<div>
                                <IconButton>
                                    <AccountCircle/>
                                </IconButton>
                                <Typography>{user.id}</Typography>
                            </div>
                            : <div>
                                <Button color="inherit" onClick={this.handleLoginButton} >登陆</Button>
                                <Button color="inherit" onClick={this.handleSignUpButton}>注册</Button>
                                <LoginModal isOpen={this.state.isLoginModalOpen} handleClose={this.handleLoginModalClose}/>
                                <SignUpModal isOpen={this.state.isSignUpModalOpen} handleClose={this.handleSignUpModalClose}/>
                            </div>
                        }
                    </TooBar>
                </AppBar>
                </MuiThemeProvider>
                <Paper>
                <Tabs   indicatorColor="primary"
                        textColor="primary"
                value={tabValue}
                onChange={this.handleTabChange}>
                    <Tab label="首页(实时浏览)"/>
                    <Tab label="排行榜"/>
                    <Tab label="交易记录"/>
                    <Tab label="期权组合"/>
                </Tabs>
                </Paper>
            </div>
        )
    }

}

export default withRouter(withStyles(style)(NavTop))