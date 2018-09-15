import axios from 'axios'

export function findAllTransactions(callback) {
    axios.get('/TransactionBl/findTransactionByUser',{
        params:{
            userId:sessionStorage.getItem('user'),
        }
    }).then((response)=>callback(response))
        .catch((error)=>console.log(error))
}
