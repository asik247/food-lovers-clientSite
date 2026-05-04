import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/HomePage/Home";

const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children:[
            {
                index:true,
                Component:Home
            }
        ]
    }
])
export default router