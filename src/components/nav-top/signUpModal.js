import React,{Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';




class SignUpModal extends Component{

    render(){
        const {isOpen}=this.props
        const {handleClose}=this.props;
        return(
            <Dialog open={isOpen} onClose={handleClose}>
                <DialogTitle>登陆</DialogTitle>

            </Dialog>
        )
    }
}

export  default SignUpModal

