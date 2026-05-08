import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000"
})
const useInstance = ()=>{
    return instance
}
export default useInstance;