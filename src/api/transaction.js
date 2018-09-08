import axios from 'axios'

export function findAllTransactions(userId) {
    axios.get('/TransactionBl/findTransactionByUser',{
        params:{
            userId:userId
        }
    })
        .then(function(response){
            console.log(response);//请求正确时执行的代码
        }).catch(function(response){
        console.log(response);//发生错误时执行的代码
    })
}