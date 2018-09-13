import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import {Button,ButtonGroup} from 'reactstrap'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
import TextField from '@material-ui/core/TextField'
import MButton from '@material-ui/core/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import {purchaseCombination} from "../../api/Combination"



const style ={


}
class TradeModal extends Component{
    state={
        isKaiCang:true,
        num:1,
    }
    changeNum = (e)=>this.setState({num:e.target.value})
    KaiCang = ()=>this.setState({isKaiCang:true})
    noKaiCang = ()=>this.setState({isKaiCang:false})
    handleClose = ()=>this.props.onClose()
    handleTrade = ()=>{
        let {options} =this.props
        purchaseCombination(options[0].optionAbbr,options[1].optionAbbr,
            options[2].optionAbbr,options[3].optionAbbr,
            (response)=>{
            if(response.data ==='SUCCESS') {
                alert('购买成功')
                this.props.onClose()
            }else
                alert('购买失败')

            })
    }
    render(){
        let {options,open,onClose,classes} = this.props
        let {isKaiCang,num} = this.state
        return(
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>购买组合</DialogTitle>
                <DialogContent className={classes.grid}>
                    <Grid container spacing={8} >
                        <Grid container spacing={24} justify="flex-start" alignItems="center">
                            <ButtonGroup>
                                <Button color="secondary" onClick={this.KaiCang} active={isKaiCang}>开仓</Button>
                                <Button color="secondary" onClick={this.noKaiCang} active={!isKaiCang}>平仓</Button>
                            </ButtonGroup>
                            <TextField label="数量" margin="normal" type="number" style={{marginLeft:20}} value={num} onChange={this.changeNum}    InputLabelProps={{shrink: true,}}/>
                        </Grid>
                        {options.map((option)=>(
                            <Grid item container xs={12} key={option&&option.optionAbbr}  justify="center" alignItems="center">
                                <Grid item xs={4}>
                                    <ButtonGroup>
                                        <Button color="secondary" outline   active={option&&((isKaiCang&&option.optionType=='UP')||(!isKaiCang&&option.optionType=='DOWN'))}>买</Button>
                                        <Button color="secondary" outline  active={option&&((isKaiCang&&option.optionType=='DOWN')||(!isKaiCang&&option.optionType=='UP'))}>卖</Button>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item xs={4}>
                                    <Chip label={option&&option.optionAbbr}/>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField label="数量" margin="normal" type="number" value={num}   InputLabelProps={{shrink: true,}}/>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <MButton color="primary" variant="contained" onClick={this.handleClose}>
                        取消
                    </MButton>
                    <MButton color="primary" variant="contained" onClick={this.handleTrade}>
                        购买
                    </MButton>
                </DialogActions>
            </Dialog>
            )

    }
}

export default withStyles(style)(TradeModal)