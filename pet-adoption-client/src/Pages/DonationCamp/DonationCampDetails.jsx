import { Helmet } from "react-helmet-async";
import { FaHandHoldingDollar, FaSackDollar } from "react-icons/fa6";
import { TbListDetails } from "react-icons/tb";


const DonationCampDetails = () => {
    return (
        <>
            <Helmet><title>Paw | Pet Donation</title></Helmet>
            <div className="pt-32 min-h-screen px-10">
                <div className=" grid grid-cols-4 shadow-md shadow-slate-400 rounded-3xl">
                    <div>
                        <img className="rounded-l-3xl" src="https://i.ibb.co/k0DRKpv/dog1.png" alt="" />
                    </div>
                    <div className="col-span-3 text-slate-800 bg-teal-50 w-full rounded-r-3xl px-5 py-3 grid" >
                        <p className="text-3xl font-extrabold">Name : Bruce</p>
                        <p className="text-xl my-3">Age : 3 years</p>
                        <p className="flex items-center text-lg gap-3"><FaSackDollar></FaSackDollar>5000</p>
                        <p className="flex items-center text-lg gap-3 my-3"><FaHandHoldingDollar></FaHandHoldingDollar>3500</p>
                        <TbListDetails></TbListDetails>
                        <p className="text-lg my-2">Bruce is currently undergoing extensive medical care and rehabilitation to address the physical and emotional toll of his past. Your donations will directly contribute to covering his medical expenses, including veterinary treatments, medications, and any necessary surgeries.</p>

                        <button onClick={() => document.getElementById('my_modal_2').showModal()} className="w-full rounded-lg border border-teal-800 hover:border-2 text-base font-bold text-slate-800 px-3 py-1">Donate Now</button>

                    </div>
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box bg-slate-100">
                            <form>
                                <div className="grid  gap-3 m-2">
                                    <span className="font-bold  text-slate-900 text-xl">Donation Amount</span>
                                    <input type="text" value="" placeholder="" className="p-2 px-3 rounded-lg text-xl bg-white text-slate-900 outline-none" />
                                </div>
                                <div className="grid  gap-3 m-2">
                                    <span className="font-bold  text-slate-900 text-xl">Credit Card</span>
                                    <input type="text" placeholder="" className="p-2 px-3 rounded-lg text-xl bg-white text-slate-900 outline-none " />
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

export default DonationCampDetails;