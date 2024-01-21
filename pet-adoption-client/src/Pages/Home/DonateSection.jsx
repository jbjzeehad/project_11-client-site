import { GiRabbitHead } from "react-icons/gi";
import { LuCat } from "react-icons/lu";
import { TbDog } from "react-icons/tb";
import { FaDonate } from "react-icons/fa";


const DonateSection = () => {
    return (
        <div className="bg-teal-50 mx-8 rounded-3xl p-10">
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    {/* <p className="text-4xl text-slate-800 font-bold py-5">Share The Love</p> */}
                    <hr className="w-1/6 border-2 border-teal-900" />
                    <p className="text-6xl text-teal-950 pt-9 font-extrabold">Donate To Give Pets<br />A Second Chance !</p>
                </div>
                <p className="text-2xl font-bold hover:font-extrabold text-teal-800 self-end">Share Love &gt;</p>
            </div>




            <div className="grid grid-cols-2 mt-10 gap-5">
                <div className="grid grid-cols-2 shadow-md shadow-slate-400 rounded-3xl">
                    <div>
                        <img className="rounded-l-3xl" src="https://i.ibb.co/ZNZZJ3H/don1.png" alt="" />
                    </div>
                    <div className=" text-slate-800 bg-teal-50 w-full rounded-r-3xl p-3">
                        <p className="text-2xl font-extrabold ">Paws for a Cause</p>
                        <p className="font-bold my-2">Join Our Pet Donation Drive! Support will be directed towards adoption initiatives.</p>
                        <div>
                            <button className="rounded-full border border-teal-800 hover:border-2 text-xl text-slate-800 p-2"><FaDonate></FaDonate></button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 shadow-md shadow-slate-400 rounded-3xl">
                    <div>
                        <img className="rounded-l-3xl" src="https://i.ibb.co/tbR7jmT/don2.png" alt="" />
                    </div>
                    <div className=" text-slate-800 bg-teal-50 w-full rounded-r-3xl p-3">
                        <p className="text-2xl font-extrabold ">Paws for a Cause</p>
                        <p className="font-bold my-2">Support will be directed towards adoption pets find loving families and permanent homes.</p>
                        <div>
                            <button className="rounded-full border border-teal-800 hover:border-2 text-xl text-slate-800 p-2"><FaDonate></FaDonate></button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 shadow-md shadow-slate-400 rounded-3xl">
                    <div>
                        <img className="rounded-l-3xl" src="https://i.ibb.co/qBVVXBY/don3.png" alt="" />
                    </div>
                    <div className=" text-slate-800 bg-teal-50 w-full rounded-r-3xl p-3">
                        <p className="text-2xl font-extrabold ">Paws for a Cause</p>
                        <p className="font-bold my-2">Your donation will go towards providing essential medical care for injured or sick animals.</p>
                        <div>
                            <button className="rounded-full border border-teal-800 hover:border-2 text-xl text-slate-800 p-2"><FaDonate></FaDonate></button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 shadow-md shadow-slate-400 rounded-3xl">
                    <div>
                        <img className="rounded-l-3xl" src="https://i.ibb.co/PTTqJ0J/don4.png" alt="" />
                    </div>
                    <div className=" text-slate-800 bg-teal-50 w-full rounded-r-3xl p-3">
                        <p className="text-2xl font-extrabold ">Paws for a Cause</p>
                        <p className="font-bold my-2">Funds will be used to supply nutritious food and shelter for pets awaiting their forever homes.</p>
                        <div>
                            <button className="rounded-full border border-teal-800 hover:border-2 text-xl text-slate-800 p-2"><FaDonate></FaDonate></button>
                        </div>
                    </div>
                </div>











            </div>
        </div>
    );
};

export default DonateSection;