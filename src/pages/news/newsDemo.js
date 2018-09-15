import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import styles from './newsDemo.css'

// const styles={
//     root:{
//         border:'solid'
//     }
// }
class NewsDemo extends Component{
    render(){
        let {classes}=this.props
        return(
            <div>
                <div className="news_content">
                    <div className="headNews" id="dvheadnews">
                        <div className="date">2018.09.14</div>
                        <div className="news_body_title"><a onClick="idclick(805)"
                                                            title="万得发布国际化LOGO，万得味道，万得动作">黄金| 奥巴马一周两批特朗普 贸易局势多变黄金难料</a>&nbsp;
                        </div>
                        <div style={{clear: 'both'}}></div>
                        <div style={{width: '100%'}}>
                            <ul>
                                <li className="headbody">
                                    <p>第一黄金网9月14日讯 隔夜受美国CPI数据疲软及欧洲央行行长德拉基乐观言论的暴击，美元指数短线暴跌，
                                        跌破100日移动均线。现货黄金则短线跳涨，最高上探至1212.70美元/盎司。随后由于特朗普推特放言“我们没有压力与中国达成协议”，
                                        美元指数回调，黄金跳水，终勉强收于1201.49美元/盎司.周五（9月14日）亚盘时段，美元指数在94.50附近徘徊，静待晚间“恐怖数据”指引方向，
                                        目前交投于94.51；现货黄金则小幅走高。截至发稿，暂报1205.28美元/盎司，涨幅达到0.32%...
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="news_list">
                        <table id="ulNews" className="news">
                            <tbody>
                            <tr>
                                <td><label className="right">2018.09.14</label><label><a>央行调查：超三成居民预期下季度房价继续上涨</a></label>
                                    {/*<div style="clear:both;"></div>*/}
                                </td>
                            </tr>
                            <tr>
                                <td><label className="right">2018.09.14</label><label><a
                                    onClick="idclick(&quot;78&quot;)">中国商业和投资因中美贸易战正“崩溃”？外交部回应 </a></label>
                                    {/*<div style="clear:both;"></div>*/}
                                </td>
                            </tr>
                            <tr>
                                <td><label className="right">2018.09.14</label><label><a
                                    onClick="idclick(&quot;73&quot;)">伯南克致歉 金融危机中的金融恐慌和银行断贷</a></label>
                                    {/*<div style="clear:both;"></div>*/}
                                </td>
                            </tr>
                            <tr>
                                <td><label className="right">2018.09.14</label><label><a>8月规模以上工业增加值同比增6.1%</a></label>
                                    {/*<div style="clear:both;"></div>*/}
                                </td>
                            </tr>
                            <tr>
                                <td><label className="right">2018.09.14</label><label>
                                    <a>沪指跌超0.2%周K线3连阴 大牛市将启</a></label>
                                    {/*<div style="clear:both;"></div>*/}
                                </td>
                            </tr>
                            <tr>
                                <td><label className="right">2018.09.14</label><label><a
                                    >央行等三部门提示：防范外汇按金风险 谨防财产损失</a></label>
                                    {/*<div style="clear:both;"></div>*/}
                                </td>
                            </tr>
                            <tr>
                                <td><label className="right">2018.09.14</label><label>
                                    <a>市场| 管清友:股市已从资金端去杠杆到了资产端去杠杆</a></label>
                                    {/*<div style="clear:both;"></div>*/}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="pager">
                        <ul id="ulPager">
                            <li>
                                <div className="pageFirst " onClick="pageNumberClick(1)">首页</div>
                            </li>
                            <li>
                                <div className="pageNum " onClick="pagePNClick(-1)">&lt;</div>
                            </li>
                            <li>
                                <div className="pageNum select" onClick="pageNumberClick(1)">1</div>
                            </li>
                            <li>
                                <div className="ellipsis">...</div>
                            </li>
                            <li>
                                <div className="pageNum " onClick="pageNumberClick(7)">7</div>
                            </li>
                            <li>
                                <div className="pageNum " onClick="pageNumberClick(8)">8</div>
                            </li>
                            <li>
                                <div className="pageNum " onClick="pageNumberClick(9)">9</div>
                            </li>
                            <li>
                                <div className="pageNum " onClick="pageNumberClick(10)">10</div>
                            </li>
                            <li>
                                <div className="pageNum" onClick="pageNumberClick(11)">11</div>
                            </li>
                            <li>
                                <div className="pageNum grey" onClick="pagePNClick(1)">&gt;</div>
                            </li>
                            <li>
                                <div className="pageLast grey" onClick="pageNumberClick(11)">末页</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}

export default NewsDemo