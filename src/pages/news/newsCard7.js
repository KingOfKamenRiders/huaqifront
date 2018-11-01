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
                    title="期权波动率小幅回落"
                    subheader="2018/11/01"
                />
                <CardContent>
                    <Typography>
                        <strong>
                            摘要
                        </strong>
                    </Typography>
                    <Typography component="p">
                        周三上证综指小幅高开，持续走高，尾盘收涨 1.35%，报收于2602.78点，技术上受到5日和10日均线支撑。市场资金呈大举流入态势。两市成交量为3148.75亿元，较上一交易日小幅增加。期权标的资产50ETF日内稳步上行，尾盘报收于2.496，上涨 1.34%，成交量放大至 1128.91 万手。技术形态上看，50ETF再回振荡区间中位水平。
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
                            期权市场成交大幅缩量，全日累计成交 1362627 张期权合约，较上一交易日减少270594张合约。其中，认购期权成交 770294 张，较上一交易日下跌 18.8%；认沽期权成交量592333 张，较上一交易日下跌 13.44%。日成交量 PCR 升至0.768，上一交易日PCR为0.721。市场反弹行情中，投资者情绪仍然偏谨慎。上证50ETF期权总持仓量小幅降至1926242张，减少3857张。11月认购期权成交量最大的合约均集中在11 月 2.50 合约上，认沽期权最大成交量集中在 2.45 合约上，短期内市场在此区间振荡调整。
                        </Typography>
                        <Typography paragraph>
                            &emsp;&emsp;
                            标的资产 30 日历史波动率较上一交易日持平，为34.31%，略高于期权隐含波动率水平。日内水平看，认购期权隐含波动率持续下跌，认沽期权隐含波动率也是冲高回落。日间水平看，认购与认沽期权隐含波动率均有所下降，且认购期权隐含波动率降幅相对较大。平值期权方面，50ETF购11月 2.50 期权的隐含波动率为 31.07%，减少 2.48 个百分点；50ETF沽11月2.50期权的隐含波动率为31.53%，与前一交易日相比减少0.63个百分点。
                        </Typography>
                        <Typography paragraph>
                            &emsp;&emsp;
                            由于标的资产50ETF价格稳步上行。认购期权价格全线上涨，认沽期权价格全线下跌，且虚值部分跌幅较大。平值期权方面，11 月平值认购合约“50ETF 购 11 月 2.50”报收于0.0880，上涨11.96%；11月平值认沽合约“50ETF沽11月2.50”报收于0.0876，下跌17.51%。
                        </Typography>
                        <Typography paragraph>
                            &emsp;&emsp;
                            综合来看，50ETF再回振荡区间中线水平，短期内仍以区间振荡行情为主，市场波动率在短期冲高后再度有回落迹象。期权策略方面，建议投资者仍以区间振荡思路对待，逢低可尝试构建牛市垂直价差策略，不宜过分看高。
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