import { Helmet } from "react-helmet-async";
import { FaSackDollar } from "react-icons/fa6";
import { FaHandHoldingDollar } from "react-icons/fa6";


const DonationCamp = () => {
    return (
        <>
            <Helmet><title>Paw | Donation Camp</title></Helmet>
            <div className="pt-32 min-h-screen px-10">
                <div className="grid grid-cols-3">
                    <div className=" grid grid-cols-3 shadow-md shadow-slate-400 rounded-3xl">
                        <div>
                            <img className=" rounded-l-3xl" src="https://i.ibb.co/k0DRKpv/dog1.png" alt="" />
                        </div>
                        <div className="col-span-2 text-slate-800 bg-teal-50 w-full rounded-r-3xl px-5 py-2">
                            <p className="text-3xl font-extrabold ">Bruce</p>
                            <p className="text-xl my-3">Last Date</p>
                            <div className="flex justify-between my-4 items-center">
                                <p className="flex items-center text-base gap-3"><FaSackDollar></FaSackDollar>3000</p>
                                <p className="flex items-center text-lg gap-2"><FaHandHoldingDollar></FaHandHoldingDollar>500</p>
                            </div>
                            <button className="w-full rounded-lg border border-teal-800 hover:border-2 text-base font-bold text-slate-800 px-3 py-1">View Details</button>
                        </div>
                    </div>
                    <div className=" grid grid-cols-3 shadow-md shadow-slate-400 rounded-3xl">
                        <div>
                            <img className=" rounded-l-3xl" src="https://i.ibb.co/5BhfV28/cat1.png" alt="" />
                        </div>
                        <div className="col-span-2 text-slate-800 bg-teal-50 w-full rounded-r-3xl px-5 py-2">
                            <p className="text-3xl font-extrabold ">Chole</p>
                            <p className="text-xl my-3">Last Date</p>
                            <div className="flex justify-between my-4 items-center">
                                <p className="flex items-center text-base gap-3"><FaSackDollar></FaSackDollar>5000</p>
                                <p className="flex items-center text-lg gap-2"><FaHandHoldingDollar></FaHandHoldingDollar>3500</p>
                            </div>
                            <button className="w-full rounded-lg border border-teal-800 hover:border-2 text-base font-bold text-slate-800 px-3 py-1">View Details</button>
                        </div>
                    </div>
                    <div className=" grid grid-cols-3 shadow-md shadow-slate-400 rounded-3xl">
                        <div>
                            <img className=" rounded-l-3xl" src="https://i.ibb.co/P9f8Jgg/rabbit1.png" alt="" />
                        </div>
                        <div className="col-span-2 text-slate-800 bg-teal-50 w-full rounded-r-3xl px-5 py-2">
                            <p className="text-3xl font-extrabold ">Bella</p>
                            <p className="text-xl my-3">Last Date</p>
                            <div className="flex justify-between my-4 items-center">
                                <p className="flex items-center text-base gap-3"><FaSackDollar></FaSackDollar>2000</p>
                                <p className="flex items-center text-lg gap-2"><FaHandHoldingDollar></FaHandHoldingDollar>1870</p>
                            </div>
                            <button className="w-full rounded-lg border border-teal-800 hover:border-2 text-base font-bold text-slate-800 px-3 py-1">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default DonationCamp;