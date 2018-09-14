import axios from 'axios'

export function getTargets(callback) {
    axios.get('/OptionBl/getTargets')
        .then((response)=>callback(response))
        .catch((error)=>console.log(error))
}

export function getOption(optionAbbr,callback) {
    axios.get('/OptionBl/getOption',{
        params:{
            optionAbbr:optionAbbr
        }
    }).then((response)=>callback(response))
        .catch((error)=>console.log(error))
}

export function addInterestedOption(optionAbbr,callback) {
    axios.get('/OptionBl/addInterestedOption',{
        params:{
            userId:sessionStorage.getItem('user'),
            optionAbbr:optionAbbr,
        }
    }).then((response)=>callback(response))
        .catch((error)=>console.log(error))
}
export function findInterestedOptions(callback) {
    axios.get('/OptionBl/findInterestedOptions',{
        params:{
            userId:sessionStorage.getItem('user')
        }
    }).then((response)=>callback(response))
        .catch((error)=>console.log(error))
}
export function purchaseOption(opId,type,direction,num,callback) {
    axios.get('/TransactionBl/purchaseOption',{
        params:{
            optionAbbr:opId,
            type:type,
            direction:direction,
            num:num,
            userId:sessionStorage.getItem('user')
        }
    }).then((response)=>callback(response))
        .catch((error)=>console.log(error))
}

export function getRiseFallChartData(oid,callback) {
    axios.get('/OptionBl/drawOptionPrice',{
        params:{
            optionAbbr:oid,
        }
    }).then((response)=>callback(response))
        .catch((error)=>console.log(error))
}
