
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

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
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Location</th>
                            <th>Yes</th>
                            <th>No</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-900">


                        <tr>
                            <th>1</th>
                            <td><div className="mask mask-squircle w-12 h-12">
                                <img src="" />
                            </div></td>
                            <td>name</td>
                            <td>email</td>
                            <td>+880</td>
                            <td>Dhaka</td>
                            <td>
                                <button className="border border-teal-800 hover:text-teal-800 px-4 py-1 rounded-lg text-base" >
                                    <TiTick></TiTick>
                                </button>
                            </td>

                            <td>
                                <button className="border border-red-500 hover:text-red-500 px-4 py-1 rounded-lg text-base " >
                                    <RxCross2></RxCross2>
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
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Location</th>
                            <th>Yes</th>
                            <th>No</th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </>
    );
};

export default AdoptionReq;