import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Homepage from "../Pages/Home/HomePage/Homepage";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

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
                path : '/login',
                element : <Login></Login>
            }
        ]
    }
])
export default router