import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import CallAction from "./CallAction";
import Category from "./Category";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Paw | Home</title>
            </Helmet>
            <Banner></Banner>
            <CallAction></CallAction>
            <Category></Category>

        </div>
    );
};

export default Home;