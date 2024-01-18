import { useNavigate } from "react-router-dom";
import publicAxios from "../../Hooks/publicAxios";
import useAuth from "../../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";


const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = publicAxios();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
            })
    }

    return (
        <>
            <button onClick={handleGoogleSignIn} className=" flex items-center justify-center gap-2 text-xl font-bold text-slate-100 hover:border-2 rounded-full border p-1"><FcGoogle></FcGoogle>Sign In</button>
            <button onClick={handleGoogleSignIn} className=" flex items-center font-bold  justify-center text-slate-100 gap-2 text-xl hover:border-2 rounded-full border p-1"><FaFacebook></FaFacebook>Sign In</button>
        </>
    );
};

export default SocialLogin;