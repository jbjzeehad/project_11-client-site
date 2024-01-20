import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { Parallax } from "react-parallax";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { FaImage, FaLock, FaRegUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import UsePublicAxios from "../../Hooks/UsePublicAxios";


const SignUp = () => {

    const axiosPublic = UsePublicAxios();


    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database');
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "user created successfully",
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    }




    const img1 = 'https://i.ibb.co/V9X4225/banner1.png';

    return (
        <>
            <Helmet>
                <title>Paw | Register</title>
            </Helmet>
            <Parallax bgImage={img1} blur={{ min: -50, max: 50 }} >
                <div className=" min-h-[460px] relative">
                    <div className="absolute bottom-1/4 w-full  grid justify-center gap-3">
                        <p className="text-3xl font-bold text-slate-100 mb-3 animate-pulse"><Link to="/login">Already Have an Account ?</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div></Parallax>
            <div className=" m-10">

                <p className="text-6xl text-slate-800 font-bold py-5 mb-3">Register Now !</p>

                <hr className="w-1/4 border-2 border-teal-900" />

                <div className="mt-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-2">
                            <div className="">
                                <div className="flex items-center gap-5 mb-5">
                                    <FaRegUser className="text-4xl text-teal-800"></FaRegUser>
                                    <input type="name" name="name" {...register("name", { required: true })} placeholder="Full Name" className=" py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-3xl font-medium bg-slate-100  border-teal-800 placeholder:text-slate-900" />
                                    {errors.name && (
                                        <p>name is required</p>
                                    )}
                                </div>
                                <div className="flex items-center gap-5 mb-5">
                                    <FaImage className="text-4xl text-teal-800"></FaImage>
                                    <input type="text" name="photoURL" {...register("photoURL", { required: true })} placeholder="Photo URL" className=" py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-3xl font-medium bg-slate-100  border-teal-800 placeholder:text-slate-900" />
                                    {errors.photoURL && (
                                        <p>image is required</p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-5 mb-5">
                                    <MdEmail className="text-4xl text-teal-800"></MdEmail>
                                    <input type="email" name="email" {...register("email", { required: true })} placeholder="Email" className=" py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-3xl font-medium bg-slate-100  border-teal-800 placeholder:text-slate-900" />
                                    {errors.email && (
                                        <p>email is required</p>
                                    )}
                                </div>
                                <div className="flex items-center gap-5 mb-5">
                                    <FaLock className="text-4xl text-teal-800"></FaLock>
                                    <input type="password" name="password" {...register("password", { required: true, minLength: 8, maxLength: 16, pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$@!%&*?])/ })} placeholder="Password" className=" py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-3xl font-medium bg-slate-100  border-teal-800 placeholder:text-slate-900" />
                                    {errors.password?.type === "minLength" && (
                                        <p>minimum 8 characters</p>
                                    )}
                                    {errors.password?.type === "maxLength" && (
                                        <p>maximum 16 characters</p>
                                    )}
                                    {errors.password?.type === "pattern" && (
                                        <p>01 upper 01 lower 01 number 01 special character</p>
                                    )}
                                </div>

                            </div>
                        </div>
                        <div className=" mt-6">
                            <input className="py-2 px-3 text-2xl text-slate-100 rounded-lg font-bold hover:border-teal-800 hover:bg-transparent border-2 border-teal-800 hover:text-teal-700 bg-teal-800" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;