import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AllProducts from "../Pages/AllProducts/AllProducts";
import Blgs from "../Pages/Blogs/Blgs";
import AddProduct from "../Pages/DashBoardPage/Add A Product/AddProduct";
import AllByer from "../Pages/DashBoardPage/AllByer/AllByer";
import Allseller from "../Pages/DashBoardPage/AllSeller/Allseller";
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
                element : <PrivetRouting><AllProducts></AllProducts></PrivetRouting>,
                loader : ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)

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

            {
                path : '/dashbord/allseller',
                element : <Allseller></Allseller>
            },
            {
                path : '/dashbord/allbyer',
                element : <AllByer></AllByer>
            },
           
        ]
    }
])
export default router