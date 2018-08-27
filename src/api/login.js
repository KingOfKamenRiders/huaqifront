import axios from 'axios'

export function login(id,pass,callback,handleError) {
    console.log("in login")
    axios.get('/UserBl/login',{
        params:{
            username:id,
            password:pass
        }
    }).then((data)=>callback(data)).catch((error)=>handleError(error))
}

export function signUp(id,pass,callback,handleError) {
    console.log("in signUp")
    axios.get('/UserBl/signUp',{
        params:{
            username:id,
            firstPassword:pass,
            repetitiousPassword:pass
        }
    }).then((data)=>callback(data)).catch((error)=>handleError(error))
}