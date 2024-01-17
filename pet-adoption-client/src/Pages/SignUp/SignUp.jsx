import { Helmet } from "react-helmet-async";
import { Parallax } from "react-parallax";
import { FcGoogle } from "react-icons/fc";


const SignUp = () => {
    const img1 = 'https://i.ibb.co/V9X4225/banner1.png';

    return (
        <>
            <Helmet>
                <title>Paw | Register</title>
            </Helmet>
            <Parallax bgImage={img1} blur={{ min: -50, max: 50 }} >
                <div className=" min-h-[460px] relative">
                    <div className="absolute bottom-1/3 w-full  grid justify-center">
                        <p className="text-2xl text-slate-100 mb-3">Already Have an account ?</p>
                        <button className=" flex items-center justify-center gap-2 text-xl hover:border-2 rounded-full border p-1"><FcGoogle></FcGoogle>Sign In</button>
                    </div>
                </div></Parallax>
            <div className=" m-8">
                <p className="text-6xl text-slate-800 font-bold py-5 mb-3">Register Now !</p>
                <hr className="w-1/4 border-2 border-teal-900" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus qui cumque omnis sunt vitae exercitationem quo asperiores! Et doloribus at veritatis cum, rem asperiores iste. Exercitationem cumque repellat esse? Beatae.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus qui cumque omnis sunt vitae exercitationem quo asperiores! Et doloribus at veritatis cum, rem asperiores iste. Exercitationem cumque repellat esse? Beatae.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus qui cumque omnis sunt vitae exercitationem quo asperiores! Et doloribus at veritatis cum, rem asperiores iste. Exercitationem cumque repellat esse? Beatae.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus qui cumque omnis sunt vitae exercitationem quo asperiores! Et doloribus at veritatis cum, rem asperiores iste. Exercitationem cumque repellat esse? Beatae.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus qui cumque omnis sunt vitae exercitationem quo asperiores! Et doloribus at veritatis cum, rem asperiores iste. Exercitationem cumque repellat esse? Beatae.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus qui cumque omnis sunt vitae exercitationem quo asperiores! Et doloribus at veritatis cum, rem asperiores iste. Exercitationem cumque repellat esse? Beatae.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus qui cumque omnis sunt vitae exercitationem quo asperiores! Et doloribus at veritatis cum, rem asperiores iste. Exercitationem cumque repellat esse? Beatae.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus qui cumque omnis sunt vitae exercitationem quo asperiores! Et doloribus at veritatis cum, rem asperiores iste. Exercitationem cumque repellat esse? Beatae.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus qui cumque omnis sunt vitae exercitationem quo asperiores! Et doloribus at veritatis cum, rem asperiores iste. Exercitationem cumque repellat esse? Beatae.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus qui cumque omnis sunt vitae exercitationem quo asperiores! Et doloribus at veritatis cum, rem asperiores iste. Exercitationem cumque repellat esse? Beatae.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus qui cumque omnis sunt vitae exercitationem quo asperiores! Et doloribus at veritatis cum, rem asperiores iste. Exercitationem cumque repellat esse? Beatae.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus qui cumque omnis sunt vitae exercitationem quo asperiores! Et doloribus at veritatis cum, rem asperiores iste. Exercitationem cumque repellat esse? Beatae.</p>
            </div>







        </>
    );
};

export default SignUp;