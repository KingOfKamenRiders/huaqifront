import axios from 'axios'

export function getRankedCombinations(callback,handleError) {
    axios.get('/CombinationBl/getRankedCombinations')
        .then((data)=>callback(data))
        .catch((error)=>handleError(error))
}