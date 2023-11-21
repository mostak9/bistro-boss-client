import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Shop from "../Pages/Shop/Shop/Shop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Carts from "../Pages/Dashboard/Carts/Carts";
import Private from './Private/Private'
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";
import Admin from "./Admin/Admin";
import AddItems from "../Pages/Dashboard/Admin/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/Admin/ManageItems/ManageItems";
import UpdateItems from "../Pages/Dashboard/Admin/UpdateItems/UpdateItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome/AdminHome";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'menu',
                element:<Menu/>
            },
            {
                path: 'shop/:category',
                element:<Shop/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/signUp',
        element: <SignUp/>,
    },
    {
        path: 'dashboard',
        element: <Private><Dashboard/></Private>,
        children:[
            {
                path: 'userHome',
                element: <UserHome/>
            },
            {
                path: 'carts',
                element: <Carts/>
            },
            {
                path: 'payment',
                element: <Payment/>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory/>
            },

            // admin routes
            {
                path: 'adminHome',
                element: <Admin><AdminHome/></Admin>
            },
            {
                path: 'addItems',
                element: <Admin><AddItems/></Admin>
            },
            {
                path: 'allUsers',
                element: <Admin><AllUsers/></Admin>
            },
            {
                path: 'manageItems',
                element: <Admin><ManageItems/></Admin>
            },
            {
                path: 'updateItems/:id',
                element: <Admin><UpdateItems/></Admin>,
                loader: ({params}) => fetch(`http://localhost:5000/api/v1/menu/${params.id}`)
            }
        ]
    }
])

export default router;