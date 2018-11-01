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
                    title="全市场反弹 11月隐波微跌"
                    subheader="2018/11/01"
                />
                <CardContent>
                    <Typography>
                        <strong>
                            摘要
                        </strong>
                    </Typography>
                    <Typography component="p">
                        <strong>一、统计数据</strong><br/>
                        &emsp;&emsp;
                        上个交易日，全市场期权合约成交金额10.2亿元，共136万张。其中11月认购成交金额为5.0亿元，约69万张；11
                        月认沽成交金额为3.8亿元，约54万张。
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
                            <strong>一、统计数据</strong><br/>
                            &emsp;&emsp;
                            上个交易日，全市场期权合约成交金额10.2亿元，共136万张。其中11月认购成交金额为5.0亿元，约69万张；11
                            月认沽成交金额为3.8亿元，约54万张。
                        </Typography>
                        <Typography paragraph>
                            &emsp;&emsp;
                            上个交易日，30日历史波动率上升0.41%，达34.3%；GVIX下降1.27%，达31.1%。
                        </Typography>
                        <img src={require("./data5.jpg")}/>
                        <Typography paragraph>
                            &emsp;&emsp;
                            数据来源：广发证券衍生品经纪业务部，Wind
                        </Typography>
                        <Typography paragraph>
                            <strong>二、期权市场点评</strong><br/>
                            &emsp;&emsp;
                            昨日，全市场反弹，标的亦上行。期权盘面上，11合约隐波回落，而其余月份隐波微升。11月隐波微笑曲线左端走高，
                            右端下行，转为左高右低形态。同时，其余月份合约的微笑曲线均有像左上转动之势。整体看，期权市场追涨情绪消失，偏空情绪起步。
                        </Typography>
                        <Typography paragraph>
                            <strong>三、今日期权策略思考</strong><br/>
                            &emsp;&emsp;i) 备兑策略<br/>
                            &emsp;&emsp;建仓观点：目前市场估值、政策、情绪的筑底阶段，对于标的长远后市谨慎乐观<br/>
                            &emsp;&emsp;首次建议：2018年10月22日。<br/>
                            &emsp;&emsp;调整建议：昨日标的上涨，策略盈利。今日可继续持有。<br/>
                            &emsp;&emsp;备兑策略属于收益增强型，赚钱的来源在于标的上涨与期权时间价值的流逝。建仓时买入标的并锁定，同时备兑卖出认购合约，定期展仓即可。<br/>
                            &emsp;&emsp;<strong>风险提示：</strong>备兑策略整体偏多，在下跌行情中，策略将亏损。但策略无保证金风险，但若面临大幅上涨行情，需要及时对于卖出的认购合约移仓，否则有交割标的风险。<br/>
                        </Typography>
                        <Typography paragraph>
                            &emsp;&emsp;ii) 区间看涨<br/>
                            &emsp;&emsp;建仓观点：标的在原区间底部再获支撑，三季报出尽，预判市场波动减缓。起手建仓考虑卖出认沽，看市场不跌。<br/>
                            &emsp;&emsp;首次建议：2018年11月1日。<br/>
                            &emsp;&emsp;最近难有大行情，这应该是共识。所以只能小打小闹参与交易，目前预判标的维持区间震荡逻辑不变，那么现在轮到了上涨区段。结合考虑现在市场情况，此次建议起手建立义务方认沽，温和看涨。<br/>
                            &emsp;&emsp;<strong>风险提示：</strong>义务方占用保证金，若标的大跌，则有被追保、强平等风险。建议及时盯盘，预设止损。<br/>

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