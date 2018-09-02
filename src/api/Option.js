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