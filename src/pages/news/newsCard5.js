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
                    title="上证50ETF收涨 50ETF购12月2250涨幅4.22%"
                    subheader="2018/11/01"
                />
                <CardContent>
                    <Typography>
                        <strong>
                            摘要
                        </strong>
                    </Typography>
                    <Typography component="p">
                        11月1日，上证50ETF收报2.507元，上涨0.011点，涨幅0.44%，盘中最高触及2.548元，最低触及2.502元，成交金额27.72亿元。
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

                        </Typography>
                        <Typography paragraph>
                            &emsp;&emsp;
                            50ETF期权合约中，50ETF购12月2250涨幅最大，为4.22%，报收0.2965元；50ETF购11月2850跌幅最大，为26.67%，报收0.0044元。
                        </Typography>
                        <Typography paragraph>
                            &emsp;&emsp;
                            50ETF期权当日有110个合约正在交易。认购合约中，持仓量最大的为50ETF购11月2850，当日下跌0.0016元，跌幅为26.67%，持仓115530张；认沽合约中，持仓量最大的为50ETF沽11月2300，当日下跌0.0047元，跌幅21.36%，持仓84214张。
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

export default withStyles(styles)(NewsCard1)