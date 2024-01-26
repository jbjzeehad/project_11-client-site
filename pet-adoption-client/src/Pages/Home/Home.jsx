import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import CallAction from "./CallAction";
import Category from "./Category";
import PetFoodExtra from "./PetFoodExtra";
import DonateSection from "./DonateSection";
import AboutUs from "./AboutUs";



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