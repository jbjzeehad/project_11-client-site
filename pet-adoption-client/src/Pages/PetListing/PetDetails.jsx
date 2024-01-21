import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { FaPaw } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbListDetails } from "react-icons/tb";
import { AuthContext } from "../../Providers/AuthProvider";


const PetDetails = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            <Helmet>
                <title>Paw | Pet Details</title>
            </Helmet>
            <div className="pt-32 min-h-screen px-10">
                <div className=" grid grid-cols-4 shadow-md shadow-slate-400 rounded-3xl">
                    <div>
                        <img className="rounded-l-3xl" src="https://i.ibb.co/k0DRKpv/dog1.png" alt="" />
                    </div>
                    <div className="col-span-3 text-slate-800 bg-teal-50 w-full rounded-r-3xl px-5 py-3 grid" >
                        <p className="text-3xl font-extrabold">Name : Bruce</p>
                        <p className="text-xl my-3">Age : 3 years</p>
                        <p className="flex items-center text-lg gap-3"><FaPaw></FaPaw>Dog</p>
                        <p className="flex items-center text-lg gap-3 my-3"><FaLocationDot></FaLocationDot>Dhaka</p>
                        <TbListDetails></TbListDetails>
                        <p className="text-lg my-2">Bruce is an energetic and lovable Australian Shepherd, known for his striking blue merle coat and captivating heterochromia one eye is a brilliant blue, while the other is a warm amber.At just two years old, Bruce is in the prime of his playful and curious puppyhood. His boundless enthusiasm for life is contagious, making him a joy to be around.</p>

                        <button onClick={() => document.getElementById('my_modal_1').showModal()} className="w-full rounded-lg border border-teal-800 hover:border-2 text-base font-bold text-slate-800 px-3 py-1">Adopt Request</button>

                    </div>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box bg-slate-100">
                            <form>
                                <div className="grid  gap-3 m-2">
                                    <span className="font-bold  text-slate-900 text-xl">Name</span>
                                    <input type="text" value="" placeholder="" className="p-2 px-3 rounded-lg text-xl bg-white text-slate-900 outline-none" disabled />
                                </div>
                                <div className="grid  gap-3 m-2">
                                    <span className="font-bold  text-slate-900 text-xl">Email</span>
                                    <input type="text" value="" placeholder="" className="p-2 px-3 rounded-lg text-xl bg-white text-slate-900 outline-none" disabled />
                                </div>
                                <div className="grid  gap-3 m-2">
                                    <span className="font-bold  text-slate-900 text-xl">Phone Number</span>
                                    <input type="text" placeholder="+880" className="p-2 px-3 rounded-lg text-xl bg-white text-slate-900 outline-none " />
                                </div>
                                <div className="grid  gap-3 m-2">
                                    <span className="font-bold  text-slate-900 text-xl">Address</span>
                                    <input type="text" placeholder="Home, Location" className="p-2 px-3 rounded-lg text-xl bg-white text-slate-900 outline-none " />
                                </div>
                                <button className="border border-teal-800 mx-2 mt-2 py-2 px-3 rounded-lg text-slate-900 hover:bg-teal-800 hover:text-slate-100 ">SUBMIT</button>
                            </form>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="border border-teal-800 p-2 text-lg rounded-lg text-slate-900 hover:bg-teal-800 hover:text-slate-100 ">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>

            </div>
        </>
    );
};

export default PetDetails;