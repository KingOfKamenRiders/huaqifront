import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
import DollarIcon from '@material-ui/icons/AttachMoney';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CustomerIcon from '@material-ui/icons/PersonAdd';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import CardIcon from './CardIcon';
import axios from "axios";

const styles = {
    main: {
        marginRight: '1em',
        marginTop: '30px',
        marginBottom:'30px',
        width: '25%',
        float: 'left',
        marginLeft:'65px',
    },
    card: {
        overflow: 'inherit',
        textAlign: 'right',
        padding: 16,
        minHeight: 60,

    },
};

class CardList extends Component{
    state={
        balance: Number,
        income: Number,
        incomeYesterday: Number,
        displayName: 'none',
    };
    componentDidMount(){
        getIndividualCount((response)=>{this.setState({balance: response.data.balance.toFixed(2)})});
        getIncome((response)=>{this.setState({income: response.data.toFixed(2)})});
        getIncomeYesterday((response)=>{this.setState({incomeYesterday: response.data.toFixed(2)})});
        this.display_name();
    };
    display_name() {
        if (sessionStorage.getItem('user')) {
            this.setState({
                displayName: 'block',
            })
        } else {
            this.setState({
                displayName: 'none',
            })
        }
    };
    render() {
        const {classes} = this.props;
        const {balance, income, incomeYesterday, displayName} = this.state;
        return (
            <div className="section" style={{display: displayName}}>
                <div className={classes.main} >
                    <CardIcon Icon={DollarIcon} bgColor="#31708f"/>
                    <Card className={classes.card}>
                        <Typography component="h5" variant="h5">
                            <label className="heading">总收益: </label>
                            <span className="account">{income}元</span>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            gross earnings
                        </Typography>
                    </Card>
                </div>

                <div className={classes.main}>
                    <CardIcon Icon={ShoppingCartIcon} bgColor="#ff9800" />
                    <Card className={classes.card}>
                        <Typography component="h5" variant="h5">
                            <label className="heading">昨日收益 :
                                <span className="account">{incomeYesterday}元</span>
                                <span className="nums-up" hidden={incomeYesterday < 0.0 ? true : false}>↑</span>
                                <span className="nums-down" hidden={incomeYesterday > 0.0 ? true : false}>↓</span>
                            </label>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            yesterday earnings
                        </Typography>
                    </Card>
                </div>

                <div className={classes.main}>
                    <CardIcon Icon={CustomerIcon} bgColor="#4caf50" />
                    <Card className={classes.card}>
                        <Typography component="h5" variant="h5">
                            <label className="heading">账户资产 :
                                <span className="account">{balance}元</span>
                            </label>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            account assets
                        </Typography>
                    </Card>
                </div>
            </div>

        )
    }
}

export default withStyles(styles)(CardList);

function getIndividualCount(callback) {
    axios.get('/UserBl/getUserInfo',{
        params:{
            username:sessionStorage.getItem('user')
        }
    })
        .then((response)=>callback(response))
        .catch((error)=>console.log(error))
}

function getIncome(callback) {
    axios.get('/TransactionBl/calcIncome',{
        params:{
            userId:sessionStorage.getItem('user')
        }
    })
        .then((response)=>callback(response))
        .catch((error)=>console.log(error))
}

function getIncomeYesterday(callback) {
    axios.get('/TransactionBl/calcIncomeYesterday',{
        params:{
            userId:sessionStorage.getItem('user')
        }
    })
        .then((response)=>callback(response))
        .catch((error)=>console.log(error))
}
