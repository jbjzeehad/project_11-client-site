import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            {/* <div className="bg-slate-900">
                <img className="w-8 animate-pulse justify-center" src="https://i.ibb.co/MRmhWV6/petlogo.png" alt="" />
            </div> */}
            <div className="flex text-lg font-semibold justify-center gap-3 items-center px-8 py-2 bg-teal-700 text-slate-100">
                <FaFacebook></FaFacebook>
                <FaGithub></FaGithub>
                <FaLinkedinIn></FaLinkedinIn>
                <p>Jbj Zeehad 2024 - All right reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
{/* <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end"> */ }