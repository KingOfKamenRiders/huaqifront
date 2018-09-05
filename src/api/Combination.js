import axios from 'axios'

export function getCombination(userId,callback) {
    axios.get('/OptionBl/findInterestedTargets',{
        params:{
            userId:userId
        }
    })
        .then((data)=>callback(data))
        .catch((error)=>console.log(error))
}

export function getFavorite(userId,callback) {
    axios.get('/OptionBl/findInterestedTargets',{
        params:{
            userId:userId
        }
    })
        .then((data)=>callback(data))
        .catch((error)=>console.log(error))
}