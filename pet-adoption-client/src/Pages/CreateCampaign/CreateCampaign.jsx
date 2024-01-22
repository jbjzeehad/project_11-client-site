import { FaImage, FaLock, FaPaw, FaRegUser } from "react-icons/fa";
import DBError from "../ErrorPage/DBError";
import { useForm } from "react-hook-form"
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { TbListDetails } from "react-icons/tb";
import { CgDetailsLess } from "react-icons/cg";
import { CgDetailsMore } from "react-icons/cg";
import { SiPetsathome } from "react-icons/si";
import { TbLanguageKatakana } from "react-icons/tb";
import { FaSackDollar } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const CreateCampaign = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    return (
        <div>
            <div className="mx-10 mt-5">
                <form >
                    <div className="grid grid-cols-2">
                        <div className="mr-10">
                            <div className="flex items-center gap-5 mb-5">
                                <SiPetsathome className="text-4xl text-teal-800"></SiPetsathome>
                                <input type="text"  {...register("name", { required: true })} placeholder="Name" className="w-full py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-2xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" />
                                {errors.name && (
                                    <p>name is required</p>
                                )}
                            </div>
                            <div className="flex items-center gap-5 mb-5">
                                <FaSackDollar className="text-3xl text-teal-800"></FaSackDollar>
                                <input type="text"  {...register("maxdonation", { required: true })} placeholder="Max Donation" className="w-full py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-2xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" />
                                {errors.location && (
                                    <p>donation is required</p>
                                )}
                            </div>


                        </div>
                        <div>
                            <div className="flex items-center gap-5 mb-5">
                                <FaImage className="text-3xl text-teal-800"></FaImage>
                                <input type="file" {...register("image", { required: true })} placeholder="Image" className="w-full py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-2xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" />
                                {errors.image && (
                                    <p>image is required</p>
                                )}
                            </div>
                            <div className="flex items-center gap-5 mb-5">
                                <FaCalendarAlt className="text-3xl text-teal-800"></FaCalendarAlt>
                                <input type="date"  {...register("date", { required: true })} placeholder="Last Date" className="w-full py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-2xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" />
                                {errors.age && (
                                    <p>date is required</p>
                                )}
                            </div>

                        </div>
                        <div className="flex items-center gap-5 mb-5">
                            <CgDetailsLess className="text-4xl text-teal-800"></CgDetailsLess>
                            <input type="text" {...register("shortdescription", { required: true })} placeholder="Short Description" className="w-full py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-2xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" />
                            {errors.shortdescription && (
                                <p>field is required</p>
                            )}
                        </div>
                        <div className="col-span-2  flex items-center gap-5 mb-5 ">
                            <CgDetailsMore className="text-4xl text-teal-800"></CgDetailsMore>
                            <textarea {...register("longdescription", { required: true })} className="w-full h-20 py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-2xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" placeholder="Long Description"></textarea>
                            {errors.longdescription && (
                                <p>field is required</p>
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

export default CreateCampaign;