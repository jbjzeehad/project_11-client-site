import { FaPaw } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { FiHome } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { PiGraduationCapBold } from "react-icons/pi";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('logout user');
                navigate('/');
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <div className="fixed z-20  bg-slate-100 grid grid-cols-12 py-5 max-w-screen-xl">
                <div className="  col-span-1  ml-8 ">
                    <img src="https://i.ibb.co/bdCZb5J/petlogo.png" alt="" />
                </div>
                <div className="col-span-7 flex gap-8 items-center justify-center">
                    <NavLink to='/'><button className="flex items-center gap-2 hover:border-b-4 focus:border-b-4 rounded-sm border-teal-800  text-2xl font-bold text-teal-700 p-2"><FiHome></FiHome>Home</button></NavLink>
                    <NavLink to='/petlist'><button className="flex items-center gap-2 hover:border-b-4 focus:border-b-4 rounded-sm border-teal-800  text-2xl font-bold text-teal-700 p-2"><FaPaw></FaPaw>Pet Listing</button></NavLink>
                    <NavLink to="/dtncamp">  <button className="flex items-center gap-2 hover:border-b-4 focus:border-b-4 rounded-sm border-teal-800  text-2xl font-bold text-teal-700 p-2"><BiDonateHeart></BiDonateHeart>Donation</button></NavLink>
                    <NavLink to="/education"><button className="flex items-center gap-2 hover:border-b-4 focus:border-b-4 rounded-sm border-teal-800  text-2xl font-bold text-teal-700 p-2"><PiGraduationCapBold></PiGraduationCapBold>Education</button></NavLink>
                </div>
                <div className="col-span-4 flex items-center justify-end mr-8">
                    {
                        user ?
                            <>
                                <p className="text-xl mr-3 text-slate-900 font-bold">{user.displayName}</p>
                                <div className="dropdown dropdown-end rounded-full border border-teal-700">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-100 rounded-box w-52">
                                        <li><NavLink to='/dashboard'>
                                            <button className="justify-between text-teal-700 text-lg font-bold">
                                                DashBoard
                                            </button></NavLink>
                                        </li>
                                        <li><button className="text-teal-700 text-lg font-bold" onClick={handleLogOut}>Logout</button></li>
                                    </ul>
                                </div>
                            </> : <>
                                <div className="flex gap-8">
                                    <NavLink to='/login'><button className="p-2 text-2xl font-extrabold hover:border-2 hover:border-teal-800 hover:rounded-lg text-teal-700">LOG IN</button></NavLink>
                                    <NavLink to='/signup'><button className="p-2 text-2xl text-slate-100 rounded-lg font-bold hover:border-teal-800 hover:bg-transparent border-2 border-teal-800 hover:text-teal-700 bg-teal-800">Register</button></NavLink>
                                </div>
                            </>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;