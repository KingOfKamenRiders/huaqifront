import axios from 'axios';

export function getSnap(callback) {
    axios.get('/sina/list=sh510050')
        .then((response)=>callback(response))
        .catch((error)=>console.log(error))
}

export function getSseSnap(callback) {
    axios.get('/sse/snap/510050')
        .then((response)=>callback(response))
        .catch((error)=>console.log(error))
}
export function getKLineData(callback) {
    axios.get('/sse/dayk/510050')
        .then((response)=>callback(response))
        .catch((error)=>console.log(error));
}
export function getLine(callback) {
    axios.get('/sse/line/510050',{
        params:{
            select:'time,price,volume'
        }
    }).then((res)=>callback(res))
        .catch((error)=>console.log(error));
}
