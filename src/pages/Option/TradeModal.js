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
import Typography from '@material-ui/core/Typography'
import {purchaseOption} from "../../api/Option"


const style ={

}
class TradeModal extends Component{
    state={
        isKaiCang:true,
        num:1,
        isMaiJin:true,
    }
    changeNum = (e)=>this.setState({num:e.target.value})
    kaiCang = ()=>this.setState({isKaiCang:true})
    noKaiCang = ()=>this.setState({isKaiCang:false})
    maiJin = ()=>this.setState({isMaiJin:true})
    noMaiJin = ()=>this.setState({isMaiJin:false})
    handleClose = ()=>this.props.onClose()
    handleTrade = ()=>{
        let {optionAbbr} =this.props
        let type = this.state.isKaiCang?'OPEN':'CLOSE'
        let dir = this.state.isMaiJin?'BUY':'SELL'
        purchaseOption(optionAbbr,type,dir,this.state.num,
            (response)=>{
            if(response.data==='SUCCESS') {
                alert('购买成功')
            }
            else
                alert('购买失败')
                this.props.onClose()
            })

    }
    render(){
        let {open,onClose,classes} = this.props
        let {isKaiCang,num,isMaiJin} = this.state
        return(
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>购买合约</DialogTitle>
                <DialogContent className={classes.grid}>
                    <Grid container spacing={8} >
                        <Grid container  justify="flex-start" alignItems="center" item >
                            <Grid item xs={4}>
                                <Typography variant="title">交易数量</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField label="数量"  type="number"  value={num} onChange={this.changeNum}    InputLabelProps={{shrink: true,}}/>
                            </Grid>
                        </Grid>
                        <Grid container item justify="flex-start" alignItems="center">
                            <Grid item xs={4}>
                                <Typography variant="title">交易类型</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <ButtonGroup>
                                    <Button outline active={isKaiCang} onClick={this.kaiCang}>开仓</Button>
                                    <Button outline active={!isKaiCang} onClick={this.noKaiCang}>平仓</Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                        <Grid container item justify="flex-start" alignItems="center">
                            <Grid item xs={4}>
                                <Typography variant="title">交易方向</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <ButtonGroup>
                                    <Button outline active={isMaiJin} onClick={this.maiJin}>买进</Button>
                                    <Button outline active={!isMaiJin} onClick={this.noMaiJin}>卖出</Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>

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