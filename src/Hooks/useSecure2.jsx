import axios from "axios"
import { useEffect } from "react"
import useAuth from "./useAuth"

const instance = axios.create({
    baseURL: "http://localhost:3000"
})
const useSecure2 = () => {
    const { user, logOut } = useAuth()
    useEffect(() => {
        const requestInstance = instance.interceptors.request.use((config) => {
            //? Do something before request is sent
            if (user?.accessToken) {
                config.headers.authorization = `Bearer ${user.accessToken}`
            }
            return config
        }, (error) => {
            return Promise.reject(error)
        })
        //?REsponse intercepor
        const responseInterceptors = instance.interceptors.response.use((response) => {
            return response
        }, (error) => {
            // console.log('error here:-', error.response.status);
            if(error.response?.status === 401 || error.response?.status === 403){
                console.log('you log out');
                logOut()
                .then(()=>{})
                .catch(err=>{
                    console.log(err);
                })
            }
            return Promise.reject(error)
        })
        return () => {
            instance.interceptors.request.eject(requestInstance)
            instance.interceptors.response.eject(responseInterceptors)
        }
    }, [user,logOut])
    return instance
}
export default useSecure2