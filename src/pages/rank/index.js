import React,{Component} from 'react'
import RankTable from './RankTable'
import Button from '@material-ui/core/Button'
class Rank extends Component{
    render(){
        return(
            <div>
                <RankTable>
                </RankTable>
                <Button>hello</Button>
            </div>
        )
    }
}

export default Rank
