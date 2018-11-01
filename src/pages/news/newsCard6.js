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
                    title="50ETF缩量收涨市场情绪中性 期权隐波回落"
                    subheader="2018/11/01"
                />
                <CardContent>
                    <Typography>
                        <strong>
                            摘要
                        </strong>
                    </Typography>
                    <Typography component="p">
                        50ETF缩量收涨 期权隐波回落
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
                            &emsp;&emsp;周三50ETF小幅冲高，随后震荡走高，尾盘略有回落，最终收涨1.34%，收缩量阳线。
                        </Typography>
                        <Typography paragraph>
                            &emsp;&emsp;
                            从核心板块来看，银行板块在年线处收十字星；保险板块缩量微涨，站上60日均线；证券板块在120日均线下方收缩量阴十字星。从核心个股来看，中国平安缩量收涨，即将面对5日均线；招商银行站上60/5日均线；贵州茅台缩量大涨，收涨4.75%。从50ETF来看，目前已站上5日均线，短线有企稳迹象，但仍未脱离箱体震荡区间。
                        </Typography>
                        <Typography paragraph>
                            &emsp;&emsp;
                            从PCR指标76.90%来看，期权市场情绪仍然中性。从期权隐波来看，11月平值认购隐波再次低于认沽水平，连续两日上涨后，期权市场博反弹情绪快速回落，可能是认购权利仓不看好标的上涨持续性，进而平仓导致。
                        </Typography>
                        <Typography paragraph>
                            &emsp;&emsp;
                            目前标的已连涨两日，结合期权隐波来看，市场情绪已重新谨慎，今日有休整预期。但考虑到2.40政策底支撑较强，激进投资者可继续逢跌卖出11月2350认沽义务仓；保守投资者仍可使用卖虚值认沽期权降低抄底成本，或是持有50ETF投资者，可使用备兑开仓，降低持仓成本。
                        </Typography>
                        <Typography paragraph>
                            <strong>二、聊期权：</strong><br/>
                            &emsp;&emsp;
                            周三期权市场认沽认购成交量比76.90%，市场情绪中性。从11月持仓变化来看，认购持仓较前一日减少1.14%，认沽增加0.94%，看不涨减少，看不跌增加，市场预期偏弱。
                        </Typography>
                        <Typography paragraph>
                            &emsp;&emsp;
                            从11月持仓变化来看，认购在2800处增仓最大，标的压力有上移迹象；认沽仍在2450处增仓最大，此处支撑仍在增强。
                        </Typography>
                        <img src={require("./data3.jpg")}/>
                        <Typography paragraph>
                            11月期权持仓量变化(红柱认购)
                        </Typography>
                        <Typography paragraph>
                            &emsp;&emsp;
                            从11月持仓分布来看，认购最大持仓由2650变为2850,50ETF压力已上移；认沽仍在2300处持仓最大，下方支撑依然不变。
                        </Typography>
                        <Typography paragraph>
                            &emsp;&emsp;
                            从波动率来看，30日历史波动率微涨至34.99%。期权隐波收跌，11月平值认购隐波回落至30.51%，认沽隐波微跌至32.12%，认购隐波再次低于认沽水平，连续上涨后，期权市场博反弹情绪回落，目前已偏谨慎。
                        </Typography>
                        <img src={require("./data4.jpg")}/>
                        <Typography paragraph>
                            标的历史波动率走势
                        </Typography>
                        <Typography paragraph>
                            <strong>三、一些数据：</strong><br/>
                            &emsp;&emsp;
                            50ETF期权周三成交1362627张，其中认购成交770294张，认沽成交592333张，认沽认购比76.90%。总持仓1926242张，认购持仓1124721张，认沽持仓801521张。认购持仓较前一日减少13021张，同比减少1.14%；认沽持仓较前一日增加9164张，同比增加0.94%。
                        </Typography>
                        <Typography paragraph>
                            （文章来源：期权策略）
                        </Typography>
                        <Typography paragraph>
                            （原标题：50ETF缩量收涨 期权隐波回落）
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

export default withStyles(styles)(NewsCard1)