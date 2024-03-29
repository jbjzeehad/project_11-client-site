import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { FaPaw } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbListDetails } from "react-icons/tb";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
// import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";


const PetDetails = () => {
    const { user } = useContext(AuthContext);
    const loadPetDetails = useLoaderData();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // const axiosPublic = UseAxiosPublic();
    const axiosSecure = UseAxiosSecure();

    // console.log(user.displayName);


    const onsubmit = async (data) => {
        console.log("Button Clicked");

        const adoptionPet = {
            adpname: data.adpname,
            adpemail: data.adpemail,
            adpnumber: data.adpnumber,
            adpaddress: data.adpaddress,
            adpreq: 'true',
            owneremail: loadPetDetails.email,
            petimage: loadPetDetails.image

        }
        console.log(adoptionPet);

        const addAdoptionList = await axiosSecure.post('/adoption', adoptionPet);
        console.log(addAdoptionList.data);
        if (addAdoptionList.data.insertedId) {
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Request Send",
                showConfirmButton: false,
                timer: 1500
            });
        }
        console.log(addAdoptionList.data);

    }





    return (
        <>
            <Helmet>
                <title>Paw | Pet Details</title>
            </Helmet>
            <div className="pt-32 min-h-screen px-10">
                <div className=" grid grid-cols-4 shadow-md shadow-slate-400 rounded-3xl">
                    <div className="">
                        <img className="h-full rounded-l-3xl" src={loadPetDetails.image} alt="" />
                    </div>
                    <div className="col-span-3 text-slate-800 bg-teal-50 w-full rounded-r-3xl px-5 py-3 grid" >
                        <p className="text-3xl font-extrabold">Name : {loadPetDetails.name}</p>
                        <p className="text-xl my-3">Age : {loadPetDetails.age} years</p>
                        <p className="flex items-center text-lg gap-3"><FaPaw></FaPaw>{loadPetDetails.category}</p>
                        <p className="flex items-center text-lg gap-3 my-3"><FaLocationDot></FaLocationDot>{loadPetDetails.location}</p>
                        <TbListDetails></TbListDetails>
                        <p className="text-lg my-2">
                            {loadPetDetails.shortdescription}<br></br>
                            {loadPetDetails.longdescription}
                        </p>

                        <button onClick={() => document.getElementById('my_modal_1').showModal()} className="w-full rounded-lg border border-teal-800 hover:border-2 text-base font-bold text-slate-800 px-3 py-1">Adopt Request</button>

                    </div>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box bg-slate-100">
                            <form onSubmit={handleSubmit(onsubmit)}>
                                <div className="grid  gap-3 m-2">
                                    <span className="font-bold  text-slate-900 text-xl">Name</span>
                                    <input type="text" {...register("adpname", { required: true })} defaultValue={user.displayName} placeholder="" className="p-2 px-3 rounded-lg text-xl bg-white text-slate-900 outline-none" />

                                </div>
                                <div className="grid  gap-3 m-2">
                                    <span className="font-bold  text-slate-900 text-xl">Email</span>
                                    <input type="text" {...register("adpemail", { required: true })} defaultValue={user.email} placeholder="" className="p-2 px-3 rounded-lg text-xl bg-white text-slate-900 outline-none" />

                                </div>
                                <div className="grid  gap-3 m-2">
                                    <span className="font-bold  text-slate-900 text-xl">Phone Number</span>
                                    <input type="text" {...register("adpnumber", { required: true })} placeholder="" className="p-2 px-3 rounded-lg text-xl bg-white text-slate-900 outline-none" />
                                    {errors.adpnumber && (
                                        <p>number is required</p>
                                    )}
                                </div>
                                <div className="grid  gap-3 m-2">
                                    <span className="font-bold  text-slate-900 text-xl">Address</span>
                                    <input type="text" {...register("adpaddress", { required: true })} placeholder="" className="p-2 px-3 rounded-lg text-xl bg-white text-slate-900 outline-none" />
                                    {errors.adpaddress && (
                                        <p>address is required</p>
                                    )}
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