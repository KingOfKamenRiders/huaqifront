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

export function getCombinationByID(id,callback) {
    axios.get('/CombinationBl/findCombinationById',{
        params:{
            cid:id
        }
    }).then((response)=>callback(response))
        .catch((error)=>console.log(error))
}

export function addInterestedComb(ou1,od1,od2,ou2,callback) {
    axios.get('/CombinationBl/addInterestedCombination',{
        params:{
            userId:sessionStorage.getItem('user'),
            optUp1:ou1,
            optDown1:od1,
            optDown2:od2,
            optUp2:ou2,
        }
    }).then((response)=>callback(response))
        .catch((error)=>console.log(error))
}

export function getInterestedComb(callback) {
    axios.get('CombinationBl/getCombinationsByState',{
        params:{
            state:'INTERESTED',
            userId:sessionStorage.getItem('user')
        }
    }).then((response)=>callback(response))
        .catch((error)=>console.log(error))
}
export function purchaseCombination(ou1,od1,od2,ou2,callback){
    axios.get('/CombinationBl/purchaseCombination',{
        params:{
            userId:sessionStorage.getItem('user'),
            optUp1:ou1,
            optDown1:od1,
            optDown2:od2,
            optUp2:ou2,
        }
    }).then((response)=>callback(response))
        .catch((error)=>console.log(error))

}
export function getDifferenceChartData(ou1,od1,od2,ou2,callback) {
    axios.get('/CombinationBl/drawDifference',{
        params:{
            optUp1:ou1,
            optDown1:od1,
            optDown2:od2,
            optUp2:ou2,
        }
    }).then((response)=>callback(response))
        .catch((error)=>console.log(error))
}

export function getCurrentCombinations() {
    
}