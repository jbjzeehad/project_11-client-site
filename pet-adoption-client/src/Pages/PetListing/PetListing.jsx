import { Helmet } from "react-helmet-async";
import { FaPaw } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiPetsathome } from "react-icons/si";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { LuClock } from "react-icons/lu";



const PetListing = () => {
    const axiosSecure = UseAxiosPublic();
    const { data: pets = [] } = useQuery({
        queryKey: ['pets'],
        queryFn: async () => {
            const res = await axiosSecure.get('/pets');
            return res.data;
        }
    });

    return (
        <>
            <Helmet><title>Paw | PetList</title></Helmet>
            <div className="pt-36 min-h-screen px-10">
                <div className="flex gap-5 ">
                    <div className="flex items-center gap-5 mb-3">
                        <SiPetsathome className="text-xl text-teal-800"></SiPetsathome>
                        <input type="text" placeholder="Search" className=" py-2 border-b focus:border-b-2 outline-none text-slate-900 text-base font-medium bg-slate-100  border-teal-800 placeholder:text-slate-900" />
                    </div>
                    <div className="flex items-center gap-5 mb-3">
                        <FaPaw className="text-lg text-teal-800"></FaPaw>
                        <select defaultValue="default" className=" py-2  focus:border-b-2 outline-none text-slate-900 text-base font-medium bg-slate-100  border-teal-800 placeholder:text-slate-900">
                            <option disabled value="default">Pet Category</option>
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                            <option value="Rabbit">Rabbit</option>
                            <option value="Fish">Fish</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-3 my-3 gap-3">
                    {
                        pets.filter(ntadpt => ntadpt.adopted === 'false').map((pets) =>
                            <div key={pets._id} className=" grid grid-cols-3 shadow-md shadow-slate-400 rounded-3xl">
                                <div>
                                    <img className="h-full rounded-l-3xl" src={pets.image} alt="" />
                                </div>
                                <div className="col-span-2 text-slate-800 bg-teal-50 w-full rounded-r-3xl px-5 py-2">
                                    <p className="text-3xl font-extrabold ">{pets.name}</p>
                                    <div className="my-3 flex justify-between">
                                        <p className="text-lg ">{pets.age} Years</p>
                                        <p className="text-base flex items-center gap-2"><LuClock></LuClock>{pets.time.split('T')[0]}</p>
                                    </div>

                                    <div className="flex justify-between my-4 items-center">
                                        <p className="flex items-center text-lg gap-3"><FaPaw></FaPaw>{pets.category}</p>
                                        <p className="flex items-center text-lg gap-3"><FaLocationDot></FaLocationDot>{pets.location}</p>
                                    </div>
                                    <NavLink to={`/petdetails/${pets._id}`}><button className="w-full rounded-lg border border-teal-800 hover:border-2 text-base font-bold text-slate-800 px-3 py-1">Details</button></NavLink>
                                </div>
                            </div>



                        )
                    }



                </div>
            </div>
        </>
    );
};

export default PetListing;