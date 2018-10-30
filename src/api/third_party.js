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
export function getHqChartData(callback) {
    axios.get('/market/kline',{
        params:{
            prod_code :'510050.SS',
            tick_count:3000,
            period_type:300,
            fields:'tick_at,open_px,close_px,high_px,low_px,turnover_volume',
        }
    }).then((response)=>callback(response))
        .catch((error)=>console.log(error));
}
