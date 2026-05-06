import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/HomePage/Home";
import About from "../Pages/AboutPage/About";
import Product from "../Pages/AllProduct/Product";
import LogIn from "../Pages/LogIn&Registation/LogIn";
import Bids from "../Pages/MyBids/Bids";
import AuthLayout from "../Layouts/AuthLayout";
import Registation from "../Pages/LogIn&Registation/Registation";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../Pages/DashBoard/DashBoard";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'about',
                Component: About
            },

            {
                path: 'products',
                element:<PrivateRoutes><Product></Product></PrivateRoutes>
            },

            {
                path: 'login',
                Component: LogIn
            },
            {
                path: 'bids',
               element:<PrivateRoutes><Bids></Bids></PrivateRoutes>
            },
            {
                path: 'dashboard',
               element:<PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>
            },

        ]
    }
,
{
    path:'auth',
    element:<AuthLayout></AuthLayout>,
    children:[
        {index:true,element:<LogIn></LogIn>},
        {path:'registation',element:<Registation></Registation>}
    ]
}
])
export default router