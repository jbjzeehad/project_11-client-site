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


const AddPet = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    return (
        <div>
            <div className="mx-10 mt-5">
                <form >
                    <div className="grid grid-cols-2">
                        <div className="mr-10">
                            <div className="flex items-center gap-5 mb-5">
                                <SiPetsathome className="text-4xl text-teal-800"></SiPetsathome>
                                <input type="text"  {...register("name", { required: true })} placeholder="Pet Name" className="w-full py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-2xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" />
                                {errors.name && (
                                    <p>name is required</p>
                                )}
                            </div>
                            <div className="flex items-center gap-5 mb-5">
                                <TbLanguageKatakana className="text-4xl text-teal-800"></TbLanguageKatakana>
                                <input type="text"  {...register("age", { required: true })} placeholder="Pet Age" className="w-full py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-2xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" />
                                {errors.age && (
                                    <p>age is required</p>
                                )}
                            </div>
                            <div className="flex items-center gap-5 mb-5">
                                <FaLocationDot className="text-3xl text-teal-800"></FaLocationDot>
                                <input type="text"  {...register("location", { required: true })} placeholder="Pet Location" className="w-full py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-2xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" />
                                {errors.location && (
                                    <p>location is required</p>
                                )}
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-5 mb-5">
                                <FaImage className="text-3xl text-teal-800"></FaImage>
                                <input type="file" {...register("image", { required: true })} placeholder="Pet Image" className="w-full py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-2xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" />
                                {errors.image && (
                                    <p>image is required</p>
                                )}
                            </div>
                            <div className="flex items-center gap-5 mb-5">
                                <FaPaw className="text-3xl text-teal-800"></FaPaw>
                                <select defaultValue="default" {...register("category", { required: true })} className="w-full py-3 border-2 focus:border-b-4 outline-none text-slate-900 text-2xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900">
                                    <option disabled value="default" selected>Select a Category</option>
                                    <option value="salad">Dog</option>
                                    <option value="pizza">Cat</option>
                                    <option value="Soup">Rabbit</option>
                                    <option value="Dessert">Fish</option>
                                    <option value="Drinks">Others</option>
                                </select>
                                {errors.category && (
                                    <p>category is required</p>
                                )}
                            </div>
                            <div className="flex items-center gap-5 mb-5">
                                <CgDetailsLess className="text-4xl text-teal-800"></CgDetailsLess>
                                <input type="text" {...register("shortdescription", { required: true })} placeholder="Short Description" className="w-full py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-2xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" />
                                {errors.shortdescription && (
                                    <p>field is required</p>
                                )}
                            </div>
                        </div>
                        <div className="col-span-2  flex items-center gap-5 mb-5 ">
                            <CgDetailsMore className="text-4xl text-teal-800"></CgDetailsMore>
                            <textarea {...register("longdescription", { required: true })} className="w-full h-20 py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-2xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" placeholder="Long Description"></textarea>
                            {errors.longdescription && (
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

export default AddPet;