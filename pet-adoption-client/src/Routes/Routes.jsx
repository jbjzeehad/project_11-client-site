import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PetListing from "../Pages/PetListing/PetListing";
import DonationCamp from "../Pages/DonationCamp/DonationCamp";
import DashBoard from "../Layout/DashBoard";
import AddPet from "../Pages/AddPet/AddPet";
import MyPets from "../Pages/MyPets/MyPets";
import MyDonation from "../Pages/MyDonation/MyDonation";
import MyCampaigns from "../Pages/MyCampaigns/MyCampaigns";
import CreateCampaign from "../Pages/CreateCampaign/CreateCampaign";
import AdoptionReq from "../Pages/AdoptionReq/AdoptionReq";
import AllUsers from "../Pages/AllUsers/AllUsers";
import AllPets from "../Pages/AllPets/AllPets";
import AllDonation from "../Pages/AllDonation/AllDonation";
import SiteError from "../Pages/ErrorPage/siteError";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <SiteError></SiteError>,
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
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            //all user routes
            {
                path: 'addpet',
                element: <AddPet></AddPet>
            },
            {
                path: 'mypets',
                element: <MyPets></MyPets>
            },
            {
                path: 'mydonation',
                element: <MyDonation></MyDonation>
            },

            {
                path: 'mycampaigns',
                element: <MyCampaigns></MyCampaigns>
            },
            {
                path: 'createcampaign',
                element: <CreateCampaign></CreateCampaign>
            },
            {
                path: 'adoptionreq',
                element: <AdoptionReq></AdoptionReq>
            },
            //only admin routes
            {
                path: 'allusers',
                element: <AdminRoute> <AllUsers></AllUsers></AdminRoute>

            },
            {
                path: 'allpets',
                element: <AdminRoute> <AllPets></AllPets></AdminRoute>

            },
            {
                path: 'alldonation',
                element: <AdminRoute><AllDonation></AllDonation></AdminRoute>

            }
        ]
    }
]);
