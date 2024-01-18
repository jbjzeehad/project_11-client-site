import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { Helmet } from "react-helmet-async";


const DashBoard = () => {
    return (
        <>
            <Helmet>
                <title>Paw | Dashboard</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="flex">
                <div className="mt-28 fixed  bg-slate-100 z-20  w-56 min-h-screen text-slate-900">
                    <ul className="text-center  grid grid-rows-12  text-xl ">
                        <li>
                            <button className=" w-full py-2 border-r-4 focus:border-y-4 border-teal-800">Add Pet</button>
                        </li>
                        <li>
                            <button className=" w-full py-2 border-l-4 focus:border-y-4 border-teal-800">My Pets</button>
                        </li>
                        <li>
                            <button className=" w-full py-2 border-r-4 focus:border-y-4 border-teal-800">My Donation</button>
                        </li>
                        <li><button className=" w-full py-2 border-l-4 focus:border-y-4 border-teal-800">My Campaigns</button></li>
                        <li><button className=" w-full py-2 border-r-4 focus:border-y-4 border-teal-800">Create Campaign</button></li>
                        <li><button className=" w-full py-2 border-l-4 focus:border-y-4 border-teal-800">Adoption Request</button></li>
                        <li><button className=" w-full py-2 border-r-4 focus:border-y-4 border-teal-800">Users</button></li>
                        <li><button className=" w-full py-2 border-l-4 focus:border-y-4 border-teal-800">All Pets</button></li>
                        <li><button className=" w-full py-2 border-r-4 focus:border-y-4 border-teal-800">All Donations</button></li>
                    </ul>

                </div>
                <div className="flex-1 mt-28 ml-56 p-8 min-h-screen bg-slate-100">
                    <Outlet></Outlet>
                </div>
            </div>
            {/* <Footer></Footer> */}
        </>
    );
};

export default DashBoard;