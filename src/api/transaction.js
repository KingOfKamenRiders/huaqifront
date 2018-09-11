import axios from 'axios'

export function findAllTransactions(userId,callback) {
    axios.get('/TransactionBl/findTransactionByUser',{
        params:{
            userId:userId
        }
    }).then((response)=>callback(response))
        .catch((error)=>console.log(error))
}
