import React,{Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent'
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import {login} from '../../api/login'

const style=(theme)=>{
    return{
        container:{
            display:'flex',
            flexDirection:'column',
            paddingLeft:theme.spacing.unit*5,
            paddingRight:theme.spacing.unit*5,
           // background:'red'
        },
        button:{
            margin:theme.spacing.unit*3
        }
    }
}
class LoginModal extends Component{


    state={
        name:'',
        pass:'',
        invalid:false,
    }
    callLogin=()=>{
        login(this.state.name,this.state.pass,(data)=>{

        });
    }
    handleNameChange=(e)=>{
        this.setState({name:e.target.value})
    }
    handlePassChange=(e)=>{
        this.setState({pass:e.target.value})
    }

    render(){
        const {isOpen} = this.props;
        const {handleClose}=this.props;
        const {classes}=this.props;
        return(
            <Dialog open={isOpen} onClose={handleClose}>
                <DialogTitle>登录</DialogTitle>
                <DialogContent className={classes.container} >
                    <TextField label="用户名" margin="normal" value={this.state.name} onChange={this.handleNameChange} />
                    <TextField label="密码" margin="normal" type="password" value={this.state.pass} onChange={this.handlePassChange}/>
                    {this.state.invalid ? (<Typography variant="caption" color="primary">用户名或密码有误!</Typography>)
                        : null
                    }
                    <Button variant="contained" color="primary" className={classes.button} onClick={this.callLogin}>登录</Button>
                </DialogContent>
            </Dialog>
        )
    }
}


export default withStyles(style)(LoginModal)
