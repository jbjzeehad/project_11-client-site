import { Helmet } from "react-helmet-async";
import { MdEmail } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Parallax } from "react-parallax";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { FaLock } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
    const [loginError, setLoginError] = useState('');

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();



    const from = location.state?.from?.pathname || '/';

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setLoginError('');
        signIn(email, password)
            .then(result => {
                const user = result.user;
                if (user.role === 'ban') {
                    console.log('This User Banned');
                }
                console.log(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Welcome Back",
                    timer: 1500
                });
                navigate(from, {
                    replace: true
                });
            })
            .catch(error => {
                console.error(error.message);
                setLoginError("Doesn't Match");
            })

    }

    const bgimg = "https://i.ibb.co/2ySCgMQ/banner3.png";

    return (
        <>
            <Helmet>
                <title>Paw | LogIn</title>
            </Helmet>
            <Parallax bgImage={bgimg} blur={{ min: -50, max: 50 }} >
                <div className=" min-h-[460px] relative">
                    <div className=" absolute bottom-1/4 w-full  grid justify-center gap-3">
                        <p className="text-3xl text-slate-100 mb-3 font-bold animate-pulse"><Link to="/signup">Here for the first time ?</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div></Parallax>

            <div className=" m-10 grid grid-cols-2">
                <div>
                    <p className="text-6xl text-slate-800 font-bold py-5 mb-3">Welcome !</p>
                    <hr className="w-1/4 border-2 border-teal-900" />
                    <div className="mt-8 ">
                        <form onSubmit={handleLogin}>
                            <div>
                                <div className="flex items-center gap-5 mb-5">
                                    <MdEmail className="text-4xl text-teal-800"></MdEmail>
                                    <input type="email" name="email" placeholder="Email" className=" py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-3xl font-medium bg-slate-100  border-teal-800 placeholder:text-slate-900" required />
                                </div>
                                <div className="flex items-center gap-5 mb-5">
                                    <FaLock className="text-4xl text-teal-800"></FaLock>
                                    <input type="password" name="password" placeholder="Password" className=" py-3 border-b-2 focus:border-b-4 outline-none text-slate-900 text-3xl font-medium bg-slate-100  border-teal-800 placeholder:text-slate-900" required />
                                </div>
                                {
                                    loginError &&
                                    <p className="text-red-500">Invalid User or Wrong Password</p>
                                }
                            </div>

                            <div className=" mt-6">

                                <input className="py-2 px-3 text-2xl text-slate-100 rounded-lg font-bold hover:border-teal-800 hover:bg-transparent border-2 border-teal-800 hover:text-teal-700 bg-teal-800" type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <div className="col-span-3 grid grid-rows-2 grid-flow-col gap-5">
                        <div className=" row-span-2 ">
                            <img className="rounded-3xl" src="https://i.ibb.co/Fh5FcN8/petad1.png" alt="1" />
                        </div>
                        <div className="row-span-1">
                            <img className="rounded-3xl" src="https://i.ibb.co/W0qxYht/petad2.png" alt="2" />
                        </div>
                        <div className="row-span-1">
                            <img className="rounded-3xl" src="https://i.ibb.co/nL6RfbL/petad3.png" alt="3" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;