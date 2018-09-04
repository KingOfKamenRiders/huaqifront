import axios from 'axios'

export function getCombination(callback,handleError) {
    axios.get('/CombinationBl/getCurrentCombinations')
        .then((data)=>callback(data))
        .catch((error)=>handleError(error))
}

export function getFavorite(callback,handleError) {
    axios.get('/CombinationBl/findAllTransactions')
        .then((data)=>callback(data))
        .catch((error)=>handleError(error))
}