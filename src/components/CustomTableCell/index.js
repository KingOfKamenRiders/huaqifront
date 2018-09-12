import TableCell from '@material-ui/core/TableCell';
import {withStyles} from "@material-ui/core/styles/index"

const CustomTableCell = withStyles(theme => ({
    root:{
        textAlign:'center',
    },
    head: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        textAlign:'center',
        padding:5,
        fontSize:15,
    },
    body: {
        padding:5
    },
}))(TableCell);

export default CustomTableCell;