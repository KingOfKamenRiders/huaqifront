import React,{Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent'
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import {signUp} from "../../api/login"
import ResultMessage from '../../util/ResultMessage'
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


class SignUpModal extends Component{


    state={
        name:'',
        pass:'',
        confirmPass:'',
        email:'',
        invalid:false,
        inconsistent:false,
        success:false,
    }
    callSignUp=()=>{
        const {handleClose}= this.props
        if(!this.state.pass===this.state.confirmPass){
            this.setState({inconsistent:true})
            return
        }
        signUp(this.state.name,this.state.pass,(response)=>{
            if(response.data===ResultMessage.SUCCESS){
                this.setState({success:true})
                setTimeout(()=>{
                    sessionStorage.setItem("user",this.state.name);
                    handleClose();
                    window.location.href="/content";},2000)
            }else {
                this.setState({invalid:true})
            }

        },(error)=>console.log(error))
    }

    handleInputChange=(e)=>{
        switch (e.target.name){
            case 'name':this.setState({name:e.target.value});break;
            case 'pass':this.setState({pass:e.target.value});break;
            case 'confirmPass':this.setState({confirmPass:e.target.value});break;
            case 'email':this.setState({email:e.target.value});break;
            default:break;
        }
    }
    render(){
        const {handleClose,isOpen,classes}=this.props;
        return(
            <Dialog open={isOpen} onClose={handleClose}>
                <DialogTitle>仅需几分钟账户即可生成</DialogTitle>
                <DialogContent className={classes.container} >
                    <TextField label="用户名" name="name" fullWidth margin="normal" value={this.state.name} onChange={this.handleInputChange} />
                    {this.state.invalid ? (<Typography variant="caption" color="primary">用户名已被注册!</Typography>)
                        : null
                    }
                    <TextField label="密码" name="pass" margin="normal" type="password" value={this.state.pass} onChange={this.handleInputChange}/>
                    {this.state.invalid ? (<Typography variant="caption" color="primary">用户名或密码有误!</Typography>)
                        : null
                    }
                    <TextField label="确认密码" name="confirmPass" margin="normal" type="password" value={this.state.confirmPass} onChange={this.handleInputChange}/>
                    {this.state.inconsistent ? (<Typography variant="caption" color="primary">密码不一致!</Typography>)
                        : null
                    }
                    <TextField label="邮箱地址" name="email" margin="normal"  value={this.state.email} onChange={this.handleInputChange}/>
                    {this.state.success ? (<Typography variant="display4" color="secondary">注册成功!</Typography>)
                        : null
                    }
                    <Button variant="contained" color="primary" className={classes.button} onClick={this.callSignUp}>注册</Button>
                </DialogContent>
            </Dialog>
        )
    }
}

export  default withStyles(style)(SignUpModal)

