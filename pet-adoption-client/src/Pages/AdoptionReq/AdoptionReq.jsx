import { useQuery } from "@tanstack/react-query";
import UseSecureAxios from "../../Hooks/UseSecureAxios";
import { FaUserGear } from "react-icons/fa6";
import { FaUserShield } from "react-icons/fa6";
import { FaUserSlash } from "react-icons/fa6";
import Swal from "sweetalert2";
import { FaPaw } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const AdoptionReq = () => {
    return (
        <>
            <div className="">
                <table className="text-center w-full ">

                    <thead className=" bg-slate-100 text-sm text-teal-800">
                        <tr>
                            <th>SL No.</th>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Adopt</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-900">


                        <tr>
                            <th>index + 1</th>
                            <td><div className="mask mask-squircle w-12 h-12">
                                <img src="" />
                            </div></td>
                            <td>name</td>
                            <td>email</td>
                            <td>
                                status

                            </td>
                            <td>
                                <button className="border border-red-500 hover:text-red-500 px-4 py-1 rounded-lg text-sm" >
                                    <FaPaw></FaPaw>
                                </button>
                            </td>
                            <td>
                                <button className="border border-red-500 hover:text-red-500 px-4 py-1 rounded-lg text-sm" >
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
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Adopt</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </>
    );
};

export default AdoptionReq;