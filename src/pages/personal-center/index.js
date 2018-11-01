import React,{Component} from 'react'
import {Route} from 'react-router-dom'
import SideNav from './SideNav'
import PersonInfo from './PersonInfo'
import IncomeInfo from './IncomInfo'
import {withStyles} from '@material-ui/core/styles'


const style = {
    root:{
        display:'flex',
        marginLeft:15
    },
    main:{
        margin:15
    }
}
class PersonalCenter extends Component{
    componentWillMount(){

    }
    render(){
        let {match,classes} = this.props
        return(
            <div className={classes.root}>
                <SideNav/>
                <main className={classes.main}>
                    <Route path={match.url} exact component={IncomeInfo}/>
                    {/*<Route path={match.url+'/person-info'} component={PersonInfo}/>*/}
                </main>

            </div>
        )
    }
}

export default withStyles(style)(PersonalCenter)