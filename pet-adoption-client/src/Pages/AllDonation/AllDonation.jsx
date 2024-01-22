import { useQuery } from "@tanstack/react-query";
import UseSecureAxios from "../../Hooks/UseSecureAxios";
import { FaUserGear } from "react-icons/fa6";
import { FaUserShield } from "react-icons/fa6";
import { FaUserSlash } from "react-icons/fa6";
import Swal from "sweetalert2";
import { FaPaw } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlinePause } from "react-icons/md";
import { BiDonateHeart } from "react-icons/bi";

const AllDonation = () => {
    return (
        <>
            <div className="">
                <table className="text-center w-full ">
                    <thead className=" bg-slate-100 text-sm text-teal-800">
                        <tr>
                            <th>SL No.</th>
                            <th>Name</th>
                            <th>Max Donation</th>
                            <th>Progress</th>
                            <th>Pause</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-900 h-12">
                        <tr>
                            <th>1</th>
                            <td>name</td>
                            <td>$5000</td>
                            <td><progress className="progress progress-success" value={1500} max="5000"></progress></td>

                            <td>
                                <button className="border border-teal-800 hover:text-teal-800 px-4 py-1 rounded-lg text-sm" >
                                    <MdOutlinePause></MdOutlinePause>
                                </button>
                            </td>
                            <td>
                                <button className="border border-yellow-800 hover:text-yellow-800 px-4 py-1 rounded-lg text-sm" >
                                    <FaRegEdit></FaRegEdit>
                                </button>
                            </td>
                            <td>
                                <button className="border border-red-500 hover:text-red-500 px-4 py-1 rounded-lg text-sm " >
                                    <MdDelete></MdDelete>
                                </button>

                            </td>

                        </tr>
                    </tbody>
                    {/* foot */}
                    <tfoot className="bg-slate-100 text-sm rounded-2xl">
                        <tr>
                            <th>SL No.</th>
                            <th>Name</th>
                            <th>Max Donation</th>
                            <th>Progress</th>
                            <th>Pause</th>
                            <th>Update</th>
                            <th>Delete</th>

                        </tr>
                    </tfoot>

                </table>
            </div>
        </>
    );
};

export default AllDonation;