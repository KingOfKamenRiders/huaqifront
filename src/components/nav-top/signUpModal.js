import React,{Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent'
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'

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
        invalid:false,
    }
    render(){
        const {handleClose,isOpen,classes}=this.props;
        return(
            <Dialog open={isOpen} onClose={handleClose}>
                <DialogTitle>仅需几分钟账户即可生成</DialogTitle>
                <DialogContent className={classes.container} >
                    <TextField label="用户名" fullWidth margin="normal" value={this.state.name} onChange={this.handleNameChange} />
                    <TextField label="密码" margin="normal" type="password" value={this.state.pass} onChange={this.handlePassChange}/>
                    {this.state.invalid ? (<Typography variant="caption" color="primary">用户名或密码有误!</Typography>)
                        : null
                    }
                    <TextField label="确认密码" margin="normal" type="password" value={this.state.confirmPass} onChange={this.handlePassChange}/>
                    <TextField label="邮箱地址" margin="normal"  value={this.state.pass} onChange={this.handlePassChange}/>

                    <Button variant="contained" color="primary" className={classes.button} onClick={this.callLogin}>注册</Button>
                </DialogContent>
            </Dialog>
        )
    }
}

export  default withStyles(style)(SignUpModal)

