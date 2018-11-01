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
        marginTop: '10px'
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
                    title="50ETF冲高回落 证券板块再次大涨"
                    subheader="2018/10/31"
                />
                <CardContent>
                    <Typography>
                        <strong>
                            摘要
                        </strong>
                    </Typography>
                    <Typography component="p">
                        <strong>一、聊观点：</strong>
                        <br/>
                        周二50ETF开盘小幅冲高回落，随后在消息面刺激下，快速拉升，一度大涨2.63%，尾盘涨幅回落，最终收涨1.32%，收放量阳线。
                    </Typography>
                    <Typography>
                        <strong>二、聊期权：</strong>
                        <br/>
                        周二期权市场认沽认购成交量比72.11%，市场情绪回归中性，稍偏乐观。从11月持仓变化来看，认购持仓较前一日增加1.55%，认沽增加3.02%，看不跌增幅多于看不涨，市场预期偏强震荡。
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
                            <strong>一、聊观点：</strong><br/>
                            &emsp;&emsp;周二50ETF开盘小幅冲高回落，随后在消息面刺激下，快速拉升，一度大涨2.63%，尾盘涨幅回落，最终收涨1.32%，收放量阳线。
                        </Typography>
                        <Typography paragraph>
                            &emsp;&emsp;从核心板块来看，银行板块放量收涨，再次收至年线处；保险板块冲高回落，收至60日均线处；证券板块再次大涨，收至120日均线处。
                            从核心个股来看，中国平安低开高走，收至60日均线上方；招商银行冲高回落，收至60日均线下方；贵州茅台成交逾100亿，收跌4.57%。
                            从50ETF来看，在其逼近2.40时，果不其然，又来了消息面利好，政策底名副其实。不过冲高遇10日均线回落，显示多头动能尚不足，
                            今日可关注标的能否站上5日均线。
                        </Typography>
                        <Typography paragraph>
                            &emsp;&emsp;从PCR指标72.11%来看，期权市场情绪回归中性。从期权隐波来看，11月平值认购认沽隐波基本持平，上涨后，
                            期权市场博反弹情绪回落，多空力量相当。
                        </Typography>
                        <Typography paragraph>
                            &emsp;&emsp;还是老话，现在的市场，主要是国家队包括政策面与市场情绪的博弈，就看是东风压倒西风，还是西风压倒东风了。
                            不过在当前的点位，以及质押仓爆仓风险考量下，不宜过分看空。保守投资者可使用期现结合策略，如准备现货抄底
                            50ETF投资者，可使用卖虚值认沽期权降低抄底成本；或是持有50ETF投资者，可使用备兑开仓，降低持仓成本。激
                            进投资者仍可继续逢跌卖出11月2350认沽义务仓，注意控制仓位及风险。
                        </Typography>
                        <Typography paragraph>
                            <strong>二、聊期权：</strong><br/>
                            &emsp;&emsp;周二期权市场认沽认购成交量比72.11%，市场情绪回归中性，稍偏乐观。从11月持仓变化来看，认购持仓较前一日
                            增加1.55%，认沽增加3.02%，看不跌增幅多于看不涨，市场预期偏强震荡。
                        </Typography>
                        <Typography paragraph>
                            &emsp;&emsp;从11月持仓变化来看，认购在2650处增仓最大，认沽在最虚值2450处增仓最大，标的支撑压力均有上移迹象。
                        </Typography>
                        <img src={require("./data1.jpg")} style={{position:'center'}}/>
                        <Typography paragraph style={{position:'center'}}>
                            11月期权持仓量变化(红柱认购)
                        </Typography>
                        <Typography paragraph>
                            &emsp;&emsp;从11月持仓分布来看，认购最大持仓由2850变为2650,50ETF压力已上移；认沽仍在2300处持仓最大，
                            下方支撑依然不变。
                        </Typography>
                        <Typography paragraph>
                            &emsp;&emsp;从波动率来看，30日历史波动率微涨至34.84%。期权隐波收涨，11月平值认购隐波收跌至32.95%，认沽隐波上行
                            至32.89%，认购认沽隐波基本持平，上涨后，期权市场博反弹情绪回落，多空力量相当。
                        </Typography>
                        <Typography paragraph>
                           <strong>三、一些数据：</strong><br/>
                            &emsp;&emsp;50ETF期权周二成交1633221张，其中认购成交948917张，认沽成交684304张，认沽认购比72.11%。
                            总持仓1930099张，认购持仓1137742张，认沽持仓792357张。认购持仓较前一日增加17371张，同比增加1.55%；
                            认沽持仓较前一日增加23193张，同比增加3.02%
                        </Typography>
                        <Typography paragraph>
                            （文章来源：期权策略）
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

export default withStyles(styles)(NewsCard1)