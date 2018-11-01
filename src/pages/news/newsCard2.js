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
                    title="波动率持续上行"
                    subheader="2018/10/31"
                />
                <CardContent>
                    <Typography>
                        <strong>
                            摘要
                        </strong>
                    </Typography>
                    <Typography component="p">
                        昨日沪深两市冲高回落，券商涨停潮再现，上证指数收涨1.02%，创业板指数收涨0.76%。个股普涨，证券、保险、汽车
                        零部件等涨幅居前；白酒板块继续下跌，黄金等避险板块也小幅回调。三大指数收涨且涨幅相差不大，均在1%左右。期
                        指合约走势强于现货指数，基差走弱，三大指数目前仅IC处贴水状态。期权方面，标的资产50ETF上涨1.32%收于2.463，
                        平值隐含波动率持续上行。
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
                            &emsp;&emsp;
                            期权成交持仓均小幅增加。当日全市场合计成交163.32万张，较前一交易日增加 1.45 万张。认购期权成交
                            94.89 万张，较前一交易日增加 11.75 万张，认沽合约总成交 68.43 万张，较前一交易日减小10.30万张。
                            日成交量PCR值0.72大幅减小。持仓方面，期权总持仓193.01万张，持仓量较前一交易日增加4.06万张。其中，
                            认购合约持仓113.77万张，较前一交易日增加1.74万张，认沽合约持仓79.24万张，较前一交易日增加2.32万张。
                            持仓量PCR值0.70变动不大。
                        </Typography>
                        <Typography paragraph>
                            &emsp;&emsp;
                            当月认购合约交投较认沽活跃，而认沽增持量则更多。当月合约总成交量增加5.39万张，其中认购增加13.13万张，
                            认沽减小7.74万张。持仓方面，当月合约增持3.48万张。结合当月合约各执行价数据看，2.65虚值认购增持较多，
                            而认沽期权则在 2.45 以下明显增持，持仓结构预期 50ETF 仍处于2.30至2.65一线宽幅振荡中，而向下的支撑短
                            期有一定增强。
                        </Typography>
                        <Typography paragraph>
                            &emsp;&emsp;
                            波动率方面，近期平值期权隐含波动率与历史波动率同步攀升。目前三者相差不大，平值认购隐含波动率33.47%，
                            认沽32.29%，30日历史波动率34.54%。当月合约波动率曲线走平，各执行价上认购期权隐含波动率仍高于认沽。
                        </Typography>
                        <Typography paragraph>
                            &emsp;&emsp;
                            综合来看，波动率持续上行，上证50指数处于振荡区间下沿，持仓结构显示，短期下方支撑有所增强，建议投资
                            者可试多牛市看跌价差策略。
                        </Typography>
                        <Typography paragraph>
                            （文章来源：期货日报）
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

export default withStyles(styles)(NewsCard1)