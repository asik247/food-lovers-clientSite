import axios from "axios"
import { useEffect } from "react"
import useAuth from "./useAuth"
const instance = axios.create({
    baseURL: "http://localhost:3000"
})
const useSecqure = () => {
    const { user } = useAuth();
    useEffect(() => {
        const requestIntersepter = instance.interceptors.request.use((config) => {
            if (user?.accessToken) {
                config.headers.authorization = `Bearer ${user.accessToken}`
            }
            return config
        }, (error) => {
            return Promise.reject(error)
        })
        return () => {
            instance.interceptors.request.eject(requestIntersepter)
        }
    }, [user])
    return instance
}
export default useSecqure