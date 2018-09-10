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

const routes=['/','/rank','/transaction','/combination','/favorite','/news']
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
    tabLabel:{
        fontSize:20
    },
    avatarDiv:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        border:'solid'
    }
}
const theme = createMuiTheme({
    palette: {
        primary: { main: red[500] }, // Purple and green play nicely together.
        secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
    },
});
class NavTop extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:props.user,
            isLoginModalOpen:false,
            isSignUpModalOpen:false,
        };
        props.getInstance(this);
    }
    setLoginModal = (o)=>{
      this.setState({isLoginModalOpen:o})
    };
    handleTabChange=(e,value)=>{
        this.props.onRouteChange(value)
       // this.setState({tabValue:value});
        let {history}=this.props
        history.push(routes[value])
       // console.log(history);
    };
    handleLoginButton=()=>{
        this.setState({isLoginModalOpen:true})
    };
    handleLoginModalClose=()=>{
        this.setState({isLoginModalOpen:false})
    };
    handleSignUpButton=()=>{
        this.setState({isSignUpModalOpen:true})
    };
    handleSignUpModalClose=()=>{
        this.setState({isSignUpModalOpen:false})
    };
    render(){
        const {classes}=this.props;
        const user=sessionStorage.getItem('user');
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
                            ?<div className={classes.avatarDiv}>
                                <IconButton>
                                    <AccountCircle/>
                                </IconButton>
                                <Typography variant="caption">{user}</Typography>
                            </div>
                            : <div>
                                <Button color="inherit" onClick={this.handleLoginButton} >登陆</Button>
                                <Button color="inherit" onClick={this.handleSignUpButton}>注册</Button>
                                <LoginModal isOpen={this.state.isLoginModalOpen} handleClose={this.handleLoginModalClose} handleLogin={this.handleLogin}/>
                                <SignUpModal isOpen={this.state.isSignUpModalOpen} handleClose={this.handleSignUpModalClose}/>
                            </div>
                        }
                    </TooBar>
                </AppBar>
                </MuiThemeProvider>
                <Paper>
                <Tabs   indicatorColor="primary"
                        textColor="primary"
                value={this.props.tabValue}
                onChange={this.handleTabChange}>
                    <Tab label="首页(实时浏览)" classes={{label:classes.tabLabel}}/>
                    <Tab label="排行榜" classes={{label:classes.tabLabel}}/>
                    <Tab label="交易记录" classes={{label:classes.tabLabel}}/>
                    <Tab label="我的期权" classes={{label:classes.tabLabel}}/>
                    <Tab label="我的期权池" classes={{label:classes.tabLabel}}/>
                    <Tab label="新闻" classes={{label:classes.tabLabel}}/>
                </Tabs>
                </Paper>
            </div>
        )
    }

}
export default withRouter(withStyles(style)(NavTop))