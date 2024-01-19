import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
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
                            <NavLink to='/dashboard/addpet'><button className=" w-full py-2 border-b hover:border-b-2 focus:border-r-4 border-teal-800 text-teal-700 font-bold">Add Pet</button></NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/mypets'><button className=" w-full py-2 border-b hover:border-b-2 focus:border-r-4 border-teal-800 text-teal-700 font-bold">My Pets</button></NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/mydonation'> <button className=" w-full py-2 border-b hover:border-b-2 focus:border-r-4 border-teal-800 text-teal-700 font-bold">My Donation</button></NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/mycampaigns'><button className=" w-full py-2 border-b hover:border-b-2 focus:border-r-4 border-teal-800 text-teal-700 font-bold">My Campaigns</button></NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/createcampaign'> <button className=" w-full py-2 border-b hover:border-b-2 focus:border-r-4 border-teal-800 text-teal-700 font-bold">Create Campaign</button></NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/adoptionreq'> <button className=" w-full py-2 border-b hover:border-b-2 focus:border-r-4 border-teal-800 text-teal-700 font-bold">Adoption Request</button></NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/allusers'> <button className=" w-full py-2 border-b
                            hover:border-b-2 focus:border-r-4 border-teal-800 text-teal-700 font-bold">Users</button></NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/allpets'> <button className=" w-full py-2 border-b hover:border-b-2 focus:border-r-4 border-teal-800 text-teal-700 font-bold">All Pets</button></NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/alldonation'><button className=" w-full py-2 border-b hover:border-b-2 focus:border-r-4 border-teal-800 text-teal-700 font-bold">All Donations</button></NavLink>
                        </li>
                        <li>
                            <button className=" w-full py-2 border-b hover:border-b-2 focus:border-r-4 border-teal-800 text-teal-700 font-bold">Log Out</button>
                        </li>
                    </ul>

                </div>
                <div className="flex-1 mt-28 ml-56 p-8 min-h-screen bg-gradient-to-l from-slate-100 to-teal-50">
                    <Outlet></Outlet>
                </div>
            </div>
            {/* <Footer></Footer> */}
        </>
    );
};

export default DashBoard;