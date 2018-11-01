import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const styles = theme => ({
    card: {
        width:'80%',
        position: 'flex',
        marginLeft: '10%',
        marginTop: '5px'
    },
    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    },
    actions: {
        display: "flex"
    },
    content:{
      fontSize:'10px'
    },
    expand: {
        transform: "rotate(0deg)",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        }),
        marginLeft: "auto",
        [theme.breakpoints.up("sm")]: {
            marginRight: -8
        }
    },
    expandOpen: {
        transform: "rotate(180deg)"
    },
    avatar: {
        backgroundColor: red[500]
    }
});

class NewsCard1 extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            N
                        </Avatar>
                    }
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="50ETF标的如约反弹 当月隐波震荡收平"
                    subheader="2018/10/31"
                />
                <CardContent>
                    <Typography>
                        <strong>
                            摘要
                        </strong>
                    </Typography>
                    <Typography component="p">
                        上个交易日，11月认购成交金额为60349万元，约87万张；11月认沽成交金额为49180万元，约63万张。全市场期权合约
                        成交金额为12.3亿元，其中认购合约成交金额为6.8亿元，认沽合约成交金额为5.6亿元。
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            上个交易日，30日历史波动率上升0.31%，达34.2%；GVIX下降1.86%，达31.5%。 GVIX低于30日历史波动率。
                        </Typography>
                        <img src={require("./data2.jpg")}/>
                        <Typography>数据来源：广发证券衍生品经纪业务部</Typography>
                        <Typography paragraph>
                            <strong>期权市场特别点评</strong><br/>
                            <strong>a)现货市场回顾</strong><br/>
                            &emsp;&emsp;
                            昨日，标的低开后快速震荡，10:25开始上行，午后摸高2.496后涨势减弱，尾盘跌势重启。收盘涨幅1.32%，
                            日内振幅3.04%，收于2.463元。
                        </Typography>
                        <Typography paragraph>
                            <strong>b)期权交易策略分析</strong><br/>
                            &emsp;&emsp;
                            昨日，金融板块反弹，贵州茅台低开高走，共同拉动标的反弹。期权盘面上，各月份隐波走势分歧。11月隐波盘中
                            开盘跳涨而后震荡下行，收盘微涨5BP.11月隐波微笑曲线左端有所抬升，同时右端回落，但依旧呈现左低右高形态。
                            同时，其余月份合约的微笑曲线右端均有所下行。整体看，期权市场看反弹情绪减弱。
                        </Typography>
                        <Typography paragraph>
                            &emsp;&emsp;
                            今日具体策略思考如下：
                        </Typography>
                        <Typography paragraph>
                            &emsp;&emsp;i) 混合仓位看空<br/>
                            &emsp;&emsp;交易周期：2018年10月11日~2018年10月30日<br/>
                            &emsp;&emsp;首次建议：2018年10月11日<br/>
                            &emsp;&emsp;平仓建议：2018年10月30日。<br/>
                            &emsp;&emsp;已平仓。点击上述日期可看开平仓分析。<br/>
                        </Typography>
                        <Typography paragraph>
                            &emsp;&emsp;ii) 备兑策略<br/>
                            &emsp;&emsp;建仓观点：目前市场估值、政策、情绪的筑底阶段，对于标的长远后市谨慎乐观。<br/>
                            &emsp;&emsp;首次建议：2018年10月22日。<br/>
                            &emsp;&emsp;调整建议：昨日标的上涨，策略盈利。今日可继续持有。<br/>
                            &emsp;&emsp;备兑策略属于收益增强型，赚钱的来源在于标的上涨与期权时间价值的流逝。建仓时买入标的并锁定
                            ，同时备兑卖出认购合约，定期展仓即可。<br/>
                            &emsp;&emsp;<strong>风险提示：</strong>备兑策略整体偏多，在下跌行情中，策略将亏损。但策略无保证
                            金风险，但若面临大幅上涨行情，需要及时对于卖出的认购合约移仓，否则有交割标的风险。<br/>
                        </Typography>
                        <Typography paragraph>
                            &emsp;&emsp;iii) 日内博弈标的反弹<br/>
                            &emsp;&emsp;交易周期：2018年10月30日当天<br/>
                            &emsp;&emsp;c)聊天板块<br/>
                            &emsp;&emsp;　昨天标的如约低开高走，混合看空策略历经数次调整与坚持，终于算是踩对了市场节奏获利离场。
                            而昨日博弈市场反弹的日内交易，必须诚实的说，卖出认沽和买入认购比，并未有明显优势。主要原因在于标的盘
                            中未曾急跌，所以也没有出现典型的隐波快速跳涨。但不论怎样，就昨日的标的反弹幅度而言，不论是卖认沽or买
                            认购的日内交易，都有不错收益。而今日呢，建议方向性交易可以暂时回避，先观望吧。<br/>
                            &emsp;&emsp;<br/>
                        </Typography>
                        <Typography paragraph>
                            （文章来源：广发期权淘金通）
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

export default withStyles(styles)(NewsCard1)