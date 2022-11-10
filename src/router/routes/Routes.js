import Main from "../../layout/Main";

import Checkout from "../../pages/checkout/Checkout";
import Home from "../../pages/home/home/Home";
import Addservice from "../../pages/home/services/Addservice";
import Servic from "../../pages/home/services/Servic";
import Login from "../../pages/login/Login";
import Review from "../../pages/review/Review";
import Blog from "../../pages/shared/blog/Blog";
import Signup from "../../pages/signup/Signup";
import Update from "../../pages/update/Update";
import Privetrout from "./privetrout/Privetrout";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/servic',
                element:<Privetrout><Servic></Servic></Privetrout>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/checkout/:id',
                element:<Privetrout><Checkout></Checkout></Privetrout>,
                loader: ({params})=> fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: '/orders',
                element:<Privetrout><Review></Review></Privetrout>
            },
            {
                path:'/update/:id',
                element:<Update></Update>,
                loader: ({params}) => fetch(`http://localhost:5000/orders/${params.id}`)
            },
            {
                path:'/add',
                element:<Privetrout><Addservice></Addservice></Privetrout>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]

    }
])

export default router;