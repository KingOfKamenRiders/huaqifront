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
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import {withStyles} from '@material-ui/core/styles'
import LoginModal from './loginModal'
import SignUpModal from './signUpModal'

const routes=['/','/rank','/transaction','/combination','/favorite','/news']
const style={
    root: {
        flexGrow: 1,
        marginBottom:10
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
    },
    iconButton:{
        padding:0
    },
    icon:{
        fontSize:40
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
        super();
        this.state={
            user:props.user,
            isLoginModalOpen:false,
            isSignUpModalOpen:false,
            anchorEl:null,
        };
        props.getInstance(this);
    };
    handleLogout=()=>{
        sessionStorage.removeItem('user');
    }
    handleMenuOpen=(e)=>{
        this.setState({ anchorEl: e.currentTarget });
    }
    handleMenuClose = () => {
        this.setState({ anchorEl: null });
    };
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
        const {classes, history}=this.props;
        let {anchorEl} = this.state;
        const open = Boolean(anchorEl);
        const user=sessionStorage.getItem('user');
        return(
            <div className={classes.root}>
                <MuiThemeProvider theme={theme}>
                <AppBar position="static">
                    <TooBar varient="dense">
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            THE BOX
                        </Typography>
                        {user
                            ?<div className={classes.avatarDiv}>
                                <IconButton className={classes.iconButton} onClick={this.handleMenuOpen}>
                                    <AccountCircle className={classes.icon}/>
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleMenuClose}
                                >
                                    <MenuItem onClick={()=>{history.push('/personal-center');this.handleMenuClose();}}>个人中心</MenuItem>
                                    <MenuItem onClick={()=>{this.handleLogout();this.handleMenuClose();}}>登出</MenuItem>
                                </Menu>
                                <Typography variant="title">{user}</Typography>
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