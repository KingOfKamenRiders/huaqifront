import TableCell from '@material-ui/core/TableCell';
import {withStyles} from "@material-ui/core/styles/index"

const CustomTableCell = withStyles(theme => ({
    root:{
        textAlign:'center',
    },
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize:15,
        padding:5,
    },
    body: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        padding:5
    },
}))(TableCell);

export default CustomTableCell;