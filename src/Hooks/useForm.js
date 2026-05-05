import { useState } from "react"

const useForm = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);
    const handlerChange = (e) => {
        setValue(e.target.value);
    }
    return [value, handlerChange]
}
export default useForm