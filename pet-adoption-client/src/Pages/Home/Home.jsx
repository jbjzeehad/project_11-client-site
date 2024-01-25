import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import CallAction from "./CallAction";
import Category from "./Category";
import PetFoodExtra from "./PetFoodExtra";
import DonateSection from "./DonateSection";
import AboutUs from "./AboutUs";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Paw | Home</title>
            </Helmet>
            <Banner></Banner>
            <CallAction></CallAction>
            <Category></Category>
            <PetFoodExtra></PetFoodExtra>
            <DonateSection></DonateSection>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;