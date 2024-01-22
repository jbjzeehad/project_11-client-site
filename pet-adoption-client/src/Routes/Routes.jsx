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
import PetDetails from "../Pages/PetListing/PetDetails";
import DonationCampDetails from "../Pages/DonationCamp/DonationCampDetails";
import UpdateMyPets from "../Pages/MyPets/UpdateMyPets";
import UpdateMyCampaigns from "../Pages/MyCampaigns/UpdateMyCampaigns";


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
                path: "petdetails",
                element: <PetDetails></PetDetails>
            },
            {
                path: "dtncamp",
                element: <DonationCamp></DonationCamp>
            },
            {
                path: "dtncampdetails",
                element: <DonationCampDetails></DonationCampDetails>
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
                path: 'updatemypets',
                element: <UpdateMyPets></UpdateMyPets>
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
                path: 'updatemycampaigns',
                element: <UpdateMyCampaigns></UpdateMyCampaigns>
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
                element: <AllUsers></AllUsers>
                // element: <AdminRoute> <AllUsers></AllUsers></AdminRoute>

            },
            {
                path: 'allpets',
                element: <AllPets></AllPets>
                // element: <AdminRoute> <AllPets></AllPets></AdminRoute>

            },
            {
                path: 'alldonation',
                element: <AllDonation></AllDonation>
                // element: <AdminRoute><AllDonation></AllDonation></AdminRoute>

            }
        ]
    }
]);
