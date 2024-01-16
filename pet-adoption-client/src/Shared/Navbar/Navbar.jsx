import { FaPaw } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { FiHome } from "react-icons/fi";


const Navbar = () => {
    return (
        <>
            <div className="fixed z-10 bg-opacity-95 bg-slate-100 grid grid-cols-12 py-5 max-w-screen-xl">
                <div className="  col-span-1  ml-8 ">
                    <img src="https://i.ibb.co/MRmhWV6/petlogo.png" alt="" />
                </div>
                <div className="col-span-7 flex gap-8 items-center justify-center">
                    <button className="flex items-center gap-2 hover:border-b-4 focus:border-b-4 rounded-sm border-teal-800  text-2xl font-bold text-teal-700 p-2"><FiHome></FiHome>Home</button>
                    <button className="flex items-center gap-2 hover:border-b-4 focus:border-b-4 rounded-sm border-teal-800  text-2xl font-bold text-teal-700 p-2"><FaPaw></FaPaw>Pet Listing</button>
                    <button className="flex items-center gap-2 hover:border-b-4 focus:border-b-4 rounded-sm border-teal-800  text-2xl font-bold text-teal-700 p-2"><BiDonateHeart></BiDonateHeart>Donation</button>
                </div>
                <div className="col-span-4 flex items-center justify-end mr-8">
                    <div className="flex gap-8">
                        <button className="p-2 text-2xl font-extrabold hover:border-2 hover:border-teal-800 hover:rounded-lg text-teal-700">LOG IN</button>
                        <button className="p-2 text-2xl text-slate-100 rounded-lg font-bold hover:border-teal-800 hover:bg-transparent border-2 border-teal-800 hover:text-teal-700 bg-teal-800">Register</button>
                    </div>
                    {/* <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default Navbar;