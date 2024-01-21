import { GiRabbitHead } from "react-icons/gi";
import { LuCat } from "react-icons/lu";
import { TbDog } from "react-icons/tb";


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
            <div className="grid grid-cols-3 my-10 gap-5">
                <div className="relative shadow-lg shadow-slate-500 rounded-3xl">
                    <img className="rounded-3xl" src="https://i.ibb.co/cvkXVGc/card1.png" alt="" />
                    <div className="absolute bottom-0 text-slate-800 bg-teal-50 w-full rounded-3xl grid justify-center text-center rounded-t-full py-3">
                        <p className="text-3xl font-extrabold text-teal-900">Bruce</p>
                        <p className="font-bold">3 years</p>
                    </div>
                    <div className="absolute top-0 right-0 rounded-3xl">
                        <button className=" border-b-2 border-l-2 border-teal-800 hover:border-4  rounded-3xl text-5xl text-slate-800 p-1"><TbDog></TbDog></button>
                    </div>
                </div>
                <div>
                    <div className="relative shadow-lg shadow-slate-500 rounded-3xl">
                        <img className="rounded-3xl" src="https://i.ibb.co/mDKbPNQ/card2.png" alt="" />
                        <div className="absolute bottom-0 text-slate-800 bg-teal-50 w-full rounded-3xl grid justify-center text-center rounded-t-full py-3">
                            <p className="text-3xl font-extrabold text-teal-900">Chole</p>
                            <p className="font-bold">2 Years</p>
                        </div>
                        <div className="absolute top-0 right-0 rounded-3xl">
                            <button className="hover:border-4 border-b-2 border-l-2 border-teal-800  rounded-3xl text-5xl p-1"><LuCat></LuCat></button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative shadow-lg shadow-slate-500 rounded-3xl">
                        <img className="rounded-3xl" src="https://i.ibb.co/5M3yPhr/card3.png" alt="" />
                        <div className="absolute bottom-0 text-slate-800 bg-teal-50 w-full rounded-3xl rounded-t-full grid justify-center py-3 text-center">
                            <p className="text-3xl font-extrabold text-teal-900">Bella</p>
                            <p className="font-bold">2 Years</p>
                        </div>
                        <div className="absolute top-0 right-0 rounded-3xl">
                            <button className=" border-b-2 border-l-2 border-teal-800 hover:border-4  rounded-3xl text-5xl text-slate-800 p-1 "><GiRabbitHead></GiRabbitHead></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonateSection;