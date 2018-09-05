import TableCell from '@material-ui/core/TableCell';
import {withStyles} from "@material-ui/core/styles/index"

const CustomTableCell = withStyles(theme => ({
    root:{
        textAlign:'center',
    },
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,

        fontSize:28,
        border:'solid black'
    },
    body: {
        fontSize: 20,
    },
}))(TableCell);

export default CustomTableCell;