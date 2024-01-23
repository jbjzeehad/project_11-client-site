
import { RiRefund2Line } from "react-icons/ri";

const MyDonation = () => {
    return (
        <>
            <div className="">
                <table className="text-center w-full ">
                    <thead className=" bg-slate-100 text-sm text-teal-800">
                        <tr>
                            <th>SL No.</th>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Donate</th>
                            <th>Refund</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-900">
                        <tr>
                            <th>1</th>
                            <td><div className="mask mask-squircle w-12 h-12">
                                <img src="" />
                            </div></td>
                            <td>name</td>
                            <td>$800</td>
                            <td>
                                <button className="border border-red-500 hover:text-red-500 px-4 py-1 rounded-lg text-base " >
                                    <RiRefund2Line></RiRefund2Line>
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
                            <th>Donate</th>
                            <th>Refund</th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </>
    );
};

export default MyDonation;