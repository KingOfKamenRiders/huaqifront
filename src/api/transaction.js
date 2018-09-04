import axios from 'axios'

export function findAllTransactions(callback,handleError) {
    axios.get('/TransactionBl/findAllTransactions')
        .then((data)=>callback(data))
        .catch((error)=>handleError(error))
}