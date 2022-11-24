import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Homepage from "../Pages/Home/HomePage/Homepage";
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
            }
        ]
    }
])
export default router