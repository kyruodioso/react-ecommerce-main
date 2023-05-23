import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import Login from "../pages/Login";
import Register from "../pages/Register";
import SingleProduct from "../pages/SingleProduct";
import NotFound from "../pages/NotFound";
import Route from "../layout/Route";
import {useProducts} from "../services/useProducts"
import { useSingleProduct } from "../services/useSingleProduct";
import LayoutPrivate from "../layout/LayoutPrivate";
import Cart from "../pages/Cart";

export const router= createBrowserRouter([
    {
        path:'/',
        element:<Route />,
        errorElement: <NotFound />,
        children:[
            {
                index: true,
                element:<Home />,
                loader: useProducts
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/register',
                element:<Register />
            },
            {
                path:'/products/:id',
                element:<SingleProduct />,
                loader: useSingleProduct,
            },
            {
                path:'/cart',
                element:<LayoutPrivate />,
                children:[
                    {
                        index:true,
                        element:<Cart/>
                    }
                ]
            },
        ]
    }
])