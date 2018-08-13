import axios from 'axios'

export function login(id,pass,callback,handleError) {
    axios.get('/api/login',{
        params:{
            username:id,
            password:pass
        }
    }).then((data)=>callback(data)).catch((error)=>handleError(error))
}

export function signUp(id,pass,callback,handleError) {
    axios.post('/api/signup',{
        params:{
            username:id,
            password:pass,
        }
    }).then((data)=>callback(data)).catch((error)=>handleError(error))
}