import React,{Component} from 'react'
import {withStyles}  from '@material-ui/core/styles'
import Cover1 from './coverImg1.png'
import Cover2 from './coverImg2.png'
import Cover3 from './coverImg3.png'
import Cover4 from './coverImg4.png'
import Cover5 from './coverImg5.png'
import Button from '@material-ui/core/Button'
import LoginModal from '../../components/nav-top/loginModal'
import SignUpMoadl from '../../components/nav-top/signUpModal'

const styles = {
    bt:{
        borderRadius: '25px 25px 25px 25px',
        borderColor:'#fff',
        borderWidth: '2px',
        color:'#fff',
        fontSize: 18,
        width: '100px',
        height: '45px',
        background: 'transparent',
        position:'absolute',
        // right:'230px',
        marginTop:'20px',
        opacity: 0.9,
    },
    onePart:{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px'
    },
    firstPart:{
        width: '18%',
    },
    otherPart:{
        marginLeft: '3%',
        width: '18%',
    },
    labelText:{
        width: '98%',
        position: 'flex',
        marginLeft: '1%',
        color: 'grey'
    },
    navButton:{
        position:'absolute',
        top:'91%',
        left:'45%',
        width:'120px',
        height:'60px',
        fontSize:20,
        padding:5,
        fontWeight:'bold'
    }

};

class Cover extends Component{
    state = {
        isLoginModalOpen:false,
        isSignUpModalOpen:false,
    }
    handleLoginButton=()=>{
        this.setState({isLoginModalOpen:true});
    };
    handleLoginModalClose=()=>{
        this.setState({isLoginModalOpen:false});
    };
    handleSignUpButton=()=>{
        this.setState({isSignUpModalOpen:true})
    };
    handleSignUpModalClose=()=>{
        this.setState({isSignUpModalOpen:false})
    };
    handleStart = ()=>{
        this.props.history.push('/content');
    }
    render() {
        const {classes} = this.props;
        return(
            <div>
                <div>
                    <img src={Cover1} width={'100%'}/>
                    <button onClick={this.handleLoginButton} className={classes.bt} style={{right:'140px'}} hidden={sessionStorage.getItem('user')}>登录</button>
                    <button onClick={this.handleSignUpButton} className={classes.bt} style={{right:'20px'}} hidden={sessionStorage.getItem('user')}>注册</button>
                    <LoginModal isOpen={this.state.isLoginModalOpen} handleClose={this.handleLoginModalClose} handleLogin={this.handleLogin}/>
                    <SignUpMoadl isOpen={this.state.isSignUpModalOpen} handleClose={this.handleSignUpModalClose}/>
                    <Button variant="contained" color="secondary" className={classes.navButton} size="large" onClick={this.handleStart}>
                        开始使用
                    </Button>
                </div>
                <div>
                    <img src={Cover2} width={'100%'}/>
                </div>

                <div className={classes.onePart}>
                    <div className={classes.firstPart}>
                        <img src={require("./1.png")} width={'100%'}/>
                        <label className={classes.labelText}>
                            依据四角套利原理，系统测算出各个期权组合的term1-term2值，由此可以得到一个套利期权组合排行榜，
                            系统将term1-term2最高值的合约组合给予用户以推荐，用户可以设定一个风险偏好，实现自动下单。
                        </label>
                    </div>
                    <div className={classes.otherPart}>
                        <img src={require("./2.png")} width={'100%'}/>
                        <label className={classes.labelText}>
                            对一组期权合约，进行买入操作之前，或已拥有时，都可以进行盈利分析，从而用户可以直观的看到
                            当前已有期权组合或用户待买入期权组合的收益数据。
                        </label>
                    </div>
                    <div className={classes.otherPart}>
                        <img src={require("./3.png")} width={'100%'}/>
                        <label className={classes.labelText}>
                            根据套利的机会只在短时间内存在的假设，平台内设自动交易系统，最大程度的提升交易速度，
                            抓住套利的机会进行操作。
                        </label>
                    </div>
                    <div className={classes.otherPart}>
                        <img src={require("./4.png")} width={'100%'}/>
                        <label className={classes.labelText}>
                            平台会以浮动窗口的形式提醒用户重要信息，包括重大新闻、某期权行权日到期、超过涨跌幅限制等。
                        </label>
                    </div>
                </div>

                <div>
                    <p></p>
                </div>

                <div className={classes.onePart}>
                    <div className={classes.firstPart}>
                        <img src={require("./5.png")} width={'100%'}/>
                        <label className={classes.labelText}>
                            界面设计友好、操作简单，使得投资新人一键获取资讯，一键购买。更便捷、更省心。
                        </label>
                    </div>
                    <div className={classes.otherPart}>
                        <img src={require("./6.png")} width={'100%'}/>
                        <label className={classes.labelText}>
                            私人定制功能，尊贵投资感受。按照您的喜好，推荐最契合的期权，获得最理想的收益。
                        </label>
                    </div>
                    <div className={classes.otherPart}>
                        <img src={require("./7.png")} width={'100%'}/>
                        <label className={classes.labelText}>
                            根据当前市场情况，自动组合投资方案，科学便捷，更加安心。
                        </label>
                    </div>
                    <div className={classes.otherPart}>
                        <img src={require("./8.png")} width={'100%'}/>
                        <label className={classes.labelText}>
                            不出网站、即知变化。因时而动，顺势而变，乃为智者。
                        </label>
                    </div>
                </div>
                <p></p>
                <img src={Cover5} width={'100%'}/>
            </div>
        )
    }
}

export default withStyles(styles)(Cover)