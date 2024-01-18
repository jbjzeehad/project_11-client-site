import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PetListing from "../Pages/PetListing/PetListing";
import DonationCamp from "../Pages/DonationCamp/DonationCamp";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "petlist",
                element: <PetListing></PetListing>
            },
            {
                path: "dtncamp",
                element: <DonationCamp></DonationCamp>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <DashBoard></DashBoard>,

        // <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            {

            }
        ]
    }
]);
