import { FaImage, FaPaw } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { FaLocationDot } from "react-icons/fa6";
import { CgDetailsLess } from "react-icons/cg";
import { CgDetailsMore } from "react-icons/cg";
import { SiPetsathome } from "react-icons/si";
import { TbLanguageKatakana } from "react-icons/tb";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateMyPets = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosPublic = UseAxiosPublic();
    const axiosSecure = UseAxiosSecure();
    const loadedAllPets = useLoaderData(); //one pets

    const onSubmit = async (data) => {
        console.log(data);
        console.log(data.image[0].lastModifiedDate);
        console.log(user.email);
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const addPet = {
                name: data.name,
                age: data.age,
                category: data.category,
                location: data.location,
                shortdescription: data.shortdescription,
                longdescription: data.longdescription,
                image: res.data.data.display_url,
                time: data.image[0].lastModifiedDate,
                // email: user.email,
                // adopted: false
            }

            const addPetList = await axiosSecure.patch(`/pets/${loadedAllPets._id}`, addPet);
            console.log(addPetList.data);
            if (addPetList.data.modifiedCount > 0) {

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Updated",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log(res.data);
    }
    return (
        <div>
            <div className="mx-10 mt-5">

                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="grid grid-cols-2">
                        <div className="mr-10">
                            <div className="flex items-center gap-5 mb-5">
                                <SiPetsathome className="text-4xl text-teal-800"></SiPetsathome>
                                <input type="text"  {...register("name", { required: true })} defaultValue={loadedAllPets.name} placeholder="Pet Name" className="w-full py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-2xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" />
                                {errors.name && (
                                    <p>name is required</p>
                                )}
                            </div>
                            <div className="flex items-center gap-5 mb-5">
                                <TbLanguageKatakana className="text-4xl text-teal-800"></TbLanguageKatakana>
                                <input type="text"  {...register("age", { required: true })} defaultValue={loadedAllPets.age} placeholder="Pet Age" className="w-full py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-2xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" />
                                {errors.age && (
                                    <p>age is required</p>
                                )}
                            </div>
                            <div className="flex items-center gap-5 mb-5">
                                <FaLocationDot className="text-3xl text-teal-800"></FaLocationDot>
                                <input type="text"  {...register("location", { required: true })} defaultValue={loadedAllPets.location} placeholder="Pet Location" className="w-full py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-2xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" />
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
                                <select defaultValue={loadedAllPets.category} {...register("category", { required: true })} className="w-full py-3 border-2 focus:border-b-4 outline-none text-slate-900 text-2xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900">
                                    <option value="Dog">Dog</option>
                                    <option value="Cat">Cat</option>
                                    <option value="Rabbit">Rabbit</option>
                                    <option value="Fish">Fish</option>
                                    <option value="Others">Others</option>
                                </select>
                                {errors.category && (
                                    <p>category is required</p>
                                )}
                            </div>
                            <div className="flex items-center gap-5 mb-5">
                                <CgDetailsLess className="text-4xl text-teal-800"></CgDetailsLess>
                                <input type="text" {...register("shortdescription", { required: true })} defaultValue={loadedAllPets.shortdescription} placeholder="Short Description" className="w-full py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-2xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" />
                                {errors.shortdescription && (
                                    <p>field is required</p>
                                )}
                            </div>
                        </div>
                        <div className="col-span-2  flex items-center gap-5 mb-5 ">
                            <CgDetailsMore className="text-4xl text-teal-800"></CgDetailsMore>
                            <textarea {...register("longdescription", { required: true })} className="w-full h-20 py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-2xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" defaultValue={loadedAllPets.longdescription} placeholder="Long Description"></textarea>
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

export default UpdateMyPets;