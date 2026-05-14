import axios from "axios"
import { useEffect } from "react"

const instance = axios.create({
     baseURL: "http://localhost:3000"
})
const useJWTInstance = ()=>{
    useEffect(()=>{
        const requestInterceptor = instance.interceptors.request.use((config)=>{
        const token = localStorage.getItem('jwtToken')
        // console.log(token);
        if(token){
            config.headers.authorization = `Bearer ${token}`
        }
        return config
        },(error)=>{
            return Promise.reject(error)
        })
        return()=>{
        instance.interceptors.request.eject(requestInterceptor)
        }
    },[])
    return instance
}
export default useJWTInstance
// Jwt custome token post useing axioss interceptor✔️✔️