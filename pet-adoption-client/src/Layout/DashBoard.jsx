import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { Helmet } from "react-helmet-async";
import { MdAdminPanelSettings } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import UseAdmin from "../Hooks/UseAdmin";


const DashBoard = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = UseAdmin();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('logout user');
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <Helmet>
                <title>Paw | Dashboard</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="flex">
                <div className="mt-28 fixed  bg-slate-100 z-20  w-56 min-h-screen text-slate-900">
                    <ul className=" grid grid-rows-12 text-xl ">
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
                        {
                            isAdmin && <>
                                <li className="border-b border-teal-800 flex justify-center items-center text-teal-950 text-3xl"><MdAdminPanelSettings></MdAdminPanelSettings></li>
                                <li>
                                    <NavLink to='/dashboard/allusers'> <button className=" w-full py-2 border-b
                            hover:border-b-2 focus:border-r-4 border-teal-800 text-teal-700 font-bold">All Users</button></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/allpets'> <button className=" w-full py-2 border-b hover:border-b-2 focus:border-r-4 border-teal-800 text-teal-700 font-bold">All Pets</button></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/alldonation'><button className=" w-full py-2 border-b hover:border-b-2 focus:border-r-4 border-teal-800 text-teal-700 font-bold">All Donations</button></NavLink>
                                </li>
                            </>
                        }

                        <li>
                            <button onClick={handleLogOut} className=" w-full py-2 border-b hover:border-b-2 focus:border-r-4 border-teal-800 text-teal-700 font-bold">Log Out</button>
                        </li>
                    </ul>

                </div>
                <div className="flex-1 mt-28 rounded-3xl ml-56 p-8 min-h-screen bg-gradient-to-l from-slate-100 to-teal-50">
                    <Outlet></Outlet>
                </div>
            </div>
            {/* <Footer></Footer> */}
        </>
    );
};

export default DashBoard;