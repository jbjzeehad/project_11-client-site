
import { FaImage, FaLock, FaPaw, FaRegUser } from "react-icons/fa";
import DBError from "../ErrorPage/DBError";
import { useForm } from "react-hook-form"
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { TbListDetails } from "react-icons/tb";
import { CgDetailsLess } from "react-icons/cg";
import { CgDetailsMore } from "react-icons/cg";


const UpdateMyPets = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    return (
        <div>
            <div className="">
                <form >
                    <div className="grid grid-cols-2">
                        <div className="">
                            <div className="flex items-center gap-5 mb-5">
                                <FaPaw className="text-4xl text-teal-800"></FaPaw>
                                <input type="name" name="name" {...register("name", { required: true })} placeholder="Pet Name" className=" py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-3xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" />
                                {errors.name && (
                                    <p>name is required</p>
                                )}
                            </div>
                            <div className="flex items-center gap-5 mb-5">
                                <FaPaw className="text-4xl text-teal-800"></FaPaw>
                                <input type="name" name="name" {...register("name", { required: true })} placeholder="Pet Age" className=" py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-3xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" />
                                {errors.name && (
                                    <p>name is required</p>
                                )}
                            </div>
                            <div className="flex items-center gap-5 mb-5">
                                <FaLocationDot className="text-4xl text-teal-800"></FaLocationDot>
                                <input type="text" name="photoURL" {...register("photoURL", { required: true })} placeholder="Pet Location" className=" py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-3xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" />
                                {errors.photoURL && (
                                    <p>image is required</p>
                                )}
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-5 mb-5">
                                <FaImage className="text-4xl text-teal-800"></FaImage>
                                <input type="select" name="email" {...register("email", { required: true })} placeholder="Pet Image" className=" py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-3xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" />
                                {errors.email && (
                                    <p>email is required</p>
                                )}
                            </div>
                            <div className="flex items-center gap-5 mb-5">
                                <FaPaw className="text-4xl text-teal-800"></FaPaw>
                                <input type="select" name="email" {...register("email", { required: true })} placeholder="Pet Category" className=" py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-3xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" />
                                {errors.email && (
                                    <p>email is required</p>
                                )}
                            </div>
                            <div className="flex items-center gap-5 mb-5">
                                <CgDetailsLess className="text-4xl text-teal-800"></CgDetailsLess>
                                <input type="email" name="email" {...register("email", { required: true })} placeholder="Short Description" className=" py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-3xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" />
                                {errors.email && (
                                    <p>email is required</p>
                                )}
                            </div>
                        </div>
                        <div className="col-span-2  flex items-center gap-5 mb-5 mr-24">
                            <CgDetailsMore className="text-4xl text-teal-800"></CgDetailsMore>
                            <input type="text-area" name="email" {...register("email", { required: true })} placeholder="Long Description" className="w-full py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-3xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" />
                            {errors.email && (
                                <p>email is required</p>
                            )}
                        </div>
                    </div>
                    <div className=" mt-6">
                        <input className="w-full py-2 px-3 text-2xl text-slate-100 rounded-lg font-bold hover:border-teal-800 hover:bg-transparent border-2 border-teal-800 hover:text-teal-700 bg-teal-800" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateMyPets;