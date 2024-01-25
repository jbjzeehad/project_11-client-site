import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="grid grid-cols-4 bg-slate-900 py-6 px-16">
                <div>
                    <p>Home</p>
                    <p>Get in touch</p>
                    <p>FAQs</p>
                </div>
                <div>
                    <p>About Us</p>
                    <p>Blog</p>
                    <p>Partnerships</p>
                    <p>Support</p>
                </div>
                <div>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                    <img className="w-10" src="../../../public/petlogo.png" alt="" />
                    <div className="flex">
                        <input className="bg-slate-100 rounded-l-lg p-2 text-slate-900" type="text" />
                        <button className="bg-teal-800 border-2 rounded-r-lg p-2 text-slate-100 font-bold text-xl ">Subscribe</button>
                    </div>
                </div>
            </div>
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