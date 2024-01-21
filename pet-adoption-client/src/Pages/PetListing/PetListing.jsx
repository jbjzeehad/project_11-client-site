import { Helmet } from "react-helmet-async";
import { FaPaw } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const PetListing = () => {
    return (
        <>
            <Helmet><title>Paw | PetList</title></Helmet>
            <div className="pt-28 min-h-screen px-10">
                <p>All Pets : 34</p>
                <input type="text" placeholder="search" />
                <div className="grid grid-cols-3 my-3 gap-3">
                    <div className=" grid grid-cols-3 shadow-md shadow-slate-400 rounded-3xl">
                        <div>
                            <img className=" rounded-l-3xl" src="https://i.ibb.co/k0DRKpv/dog1.png" alt="" />
                        </div>
                        <div className="col-span-2 text-slate-800 bg-teal-50 w-full rounded-r-3xl px-5 py-2">
                            <p className="text-3xl font-extrabold ">Bruce</p>
                            <p className="text-xl my-3">3 years</p>
                            <div className="flex justify-between my-4 items-center">
                                <p className="flex items-center text-lg gap-3"><FaPaw></FaPaw>Dog</p>
                                <p className="flex items-center text-lg gap-3"><FaLocationDot></FaLocationDot>Dhaka</p>
                            </div>
                            <button className="w-full rounded-lg border border-teal-800 hover:border-2 text-base font-bold text-slate-800 px-3 py-1">Details</button>
                        </div>
                    </div>
                    <div className=" grid grid-cols-3 shadow-md shadow-slate-400 rounded-3xl">
                        <div>
                            <img className=" rounded-l-3xl" src="https://i.ibb.co/5BhfV28/cat1.png" alt="" />
                        </div>
                        <div className="col-span-2 text-slate-800 bg-teal-50 w-full rounded-r-3xl px-5 py-2">
                            <p className="text-3xl font-extrabold ">Chole</p>
                            <p className="text-xl my-3">2 years</p>
                            <div className="flex justify-between my-4 items-center">
                                <p className="flex items-center text-lg gap-3"><FaPaw></FaPaw>Cat</p>
                                <p className="flex items-center text-lg gap-3"><FaLocationDot></FaLocationDot>Khulna</p>
                            </div>
                            <button className="w-full rounded-lg border border-teal-800 hover:border-2 text-base font-bold text-slate-800 px-3 py-1">Details</button>
                        </div>
                    </div>
                    <div className=" grid grid-cols-3 shadow-md shadow-slate-400 rounded-3xl">
                        <div>
                            <img className=" rounded-l-3xl" src="https://i.ibb.co/P9f8Jgg/rabbit1.png" alt="" />
                        </div>
                        <div className="col-span-2 text-slate-800 bg-teal-50 w-full rounded-r-3xl px-5 py-2">
                            <p className="text-3xl font-extrabold ">Bella</p>
                            <p className="text-xl my-3">1 year</p>
                            <div className="flex justify-between my-4 items-center">
                                <p className="flex items-center text-lg gap-3"><FaPaw></FaPaw>Rabbit</p>
                                <p className="flex items-center text-lg gap-3"><FaLocationDot></FaLocationDot>Sylhet</p>
                            </div>
                            <button className="w-full rounded-lg border border-teal-800 hover:border-2 text-base font-bold text-slate-800 px-3 py-1">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PetListing;