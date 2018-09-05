import axios from 'axios'

export function findAllTransactions(userId,callback) {
    axios.get('/TransactionBl/findAllTransactions',{
        params:{
            userId:userId
        }
    })
        .then((data)=>callback(data))
        .catch((error)=>console.log(error))
}