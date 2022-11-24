import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AllProducts from "../Pages/AllProducts/AllProducts";
import Blgs from "../Pages/Blogs/Blgs";
import AddProduct from "../Pages/DashBoardPage/Add A Product/AddProduct";
import Dashboard from "../Pages/DashBoardPage/Dashboard";
import Myorders from "../Pages/DashBoardPage/My orders/Myorders";
import MyProducts from "../Pages/DashBoardPage/My Products/MyProducts";
import Homepage from "../Pages/Home/HomePage/Homepage";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivetRouting from "./PrivetRouting";

const router = createBrowserRouter([
    {
        path : '/', element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Homepage></Homepage>
            },
            {
                path : '/signup',
                element : <Signup></Signup>
            },
            {
                path : '/blog',
                element : <Blgs></Blgs>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/categori/:id',
                element : <AllProducts></AllProducts>
            },
        ]
    },
    {
        path : '/dashbord', 
        element : <PrivetRouting> <DashboardLayout></DashboardLayout> </PrivetRouting> ,
        children : [
            {
                path : '/dashbord',
                element : <Myorders></Myorders>
            },
            {
                path : '/dashbord/myproducts',
                element : <MyProducts></MyProducts>
            },
            {
                path : '/dashbord/addproducts',
                element : <AddProduct></AddProduct>
            },
        ]
    }
])
export default router