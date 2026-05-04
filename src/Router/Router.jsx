import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/HomePage/Home";
import About from "../Pages/AboutPage/About";
import Product from "../Pages/AllProduct/Product";
import LogIn from "../Pages/LogIn&Registation/LogIn";
import Bids from "../Pages/MyBids/Bids";

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
                Component: Product
            },

            {
                path: 'login',
                Component: LogIn
            },
            {
                path: 'bids',
                Component: Bids
            },

        ]
    }
])
export default router