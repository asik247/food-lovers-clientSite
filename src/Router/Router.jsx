import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/HomePage/Home";

import LogIn from "../Pages/LogIn&Registation/LogIn";

import AuthLayout from "../Layouts/AuthLayout";
import Registation from "../Pages/LogIn&Registation/Registation";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../Pages/DashBoard/DashBoard";
import AddReview from "../Pages/AddReview/AddReview";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Details from "../Pages/Details/Details";
import AllReviews from "../Pages/AllReviews/AllReviews";
import UpdateMyReviews from "../Pages/UpdateMyReviews/UpdateMyReviews";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'dashboard',
                element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>
            },
            {
                path: 'login',
                Component: LogIn
            },
            {
                path:'addReview',
                element:<PrivateRoutes><AddReview></AddReview></PrivateRoutes>
            },
            {
                path:'myReviews',
                element:<PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path:'details/:id',
                loader:({params})=>fetch(`http1://localhost:3000/products/${params.id}`),
                element:<PrivateRoutes><Details></Details></PrivateRoutes>
            },
            {
                path:'allReviews',
                element:<PrivateRoutes><AllReviews></AllReviews></PrivateRoutes>
            },
            {
                path:'updateMyReviews/:id',
                Component:UpdateMyReviews
            },
            {
                path:'*',
                Component:PageNotFound
            }

        ]
    }
    ,
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            { index: true, element: <LogIn></LogIn> },
            { path: 'registation', element: <Registation></Registation> }
        ]
    }
])
export default router