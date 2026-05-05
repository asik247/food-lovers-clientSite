import { use } from "react"
import { AuthContext } from "../Context/AuthProvider"

const useAuth = () => {
    const info = use(AuthContext);
    return info
}
export default useAuth