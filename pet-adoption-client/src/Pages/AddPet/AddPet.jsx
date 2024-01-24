import { FaImage, FaPaw } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { FaLocationDot } from "react-icons/fa6";
import { CgDetailsLess } from "react-icons/cg";
import { CgDetailsMore } from "react-icons/cg";
import { SiPetsathome } from "react-icons/si";
import { TbLanguageKatakana } from "react-icons/tb";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

//image hosting
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPet = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = UseAxiosPublic();
    const axiosSecure = UseAxiosSecure();

    //added into database
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
                email: user.email,
                adopted: 'false'
            }

            const addPetList = await axiosSecure.post('/pets', addPet);
            console.log(addPetList.data);
            if (addPetList.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the List`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log(res.data);

    }
    return (
        <div>
            <div className="mx-10 mt-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2">
                        <div className="mr-10">
                            <div className="flex items-center gap-5 mb-3">
                                <SiPetsathome className="text-4xl text-teal-800"></SiPetsathome>
                                <div className="w-full">
                                    <input type="text"  {...register("name", { required: true })} placeholder="Pet Name" className="w-full py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-2xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" />
                                    {errors.name && (
                                        <p>name is required</p>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center gap-5 mb-3">
                                <TbLanguageKatakana className="text-4xl text-teal-800"></TbLanguageKatakana>
                                <div>
                                    <input type="text"  {...register("age", { required: true })} placeholder="Pet Age" className="w-full py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-2xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" />
                                    {errors.age && (
                                        <p>age is required</p>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center gap-5 mb-3">
                                <FaLocationDot className="text-3xl text-teal-800"></FaLocationDot>
                                <div>
                                    <input type="text"  {...register("location", { required: true })} placeholder="Pet Location" className="w-full py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-2xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" />
                                    {errors.location && (
                                        <p>location is required</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-5 mb-3">
                                <FaImage className="text-3xl text-teal-800"></FaImage>
                                <div className="w-full">
                                    <input type="file" {...register("image", { required: true })} placeholder="Pet Image" className="w-full py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-2xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" />
                                    {errors.image && (
                                        <p>image is required</p>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center gap-5 mb-3">
                                <FaPaw className="text-3xl text-teal-800"></FaPaw>
                                <div className="w-full">
                                    <select defaultValue="default" {...register("category", { required: true })} className="w-full py-3 border-2 focus:border-b-4 outline-none text-slate-900 text-2xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900">
                                        <option disabled value="default" >Select a Category</option>
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
                            </div>
                            <div className="flex items-center gap-5 mb-3">
                                <CgDetailsLess className="text-4xl text-teal-800"></CgDetailsLess>
                                <div className="w-full">
                                    <input type="text" {...register("shortdescription", { required: true })} placeholder="Short Description" className="w-full py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-2xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" />
                                    {errors.shortdescription && (
                                        <p>field is required</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2  flex items-center gap-5 mb-3 ">
                            <CgDetailsMore className="text-4xl text-teal-800"></CgDetailsMore>
                            <div className="w-full">
                                <textarea {...register("longdescription", { required: true })} className="w-full h-16 py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-2xl font-medium bg-teal-50  border-teal-800 placeholder:text-slate-900" placeholder="Long Description"></textarea>
                                {errors.longdescription && (
                                    <p>field is required</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <input className="w-full py-2 px-3 text-2xl text-slate-100 rounded-lg font-bold hover:border-teal-800 hover:bg-transparent border-2 border-teal-800 hover:text-teal-700 bg-teal-800" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPet;