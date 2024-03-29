
import { FaPaw } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { NavLink } from "react-router-dom";

const MyPets = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const { data: pets = [], refetch } = useQuery({
        queryKey: ['pets'],
        queryFn: async () => {
            const res = await axiosSecure.get('/pets');
            return res.data;
        }
    });


    const handleAdoption = async (pet) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Adopted",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ok"
        }).then((result) => {
            if (result.isConfirmed) {
                const updatePet = {

                    name: pet.name,
                    age: pet.age,
                    category: pet.category,
                    location: pet.location,
                    shortdescription: pet.shortdescription,
                    longdescription: pet.longdescription,
                    image: pet.image,
                    time: pet.time,
                    email: pet.email,
                    adopted: "true"

                }
                const updated = axiosSecure.put(`/pets/${pet._id}`, updatePet)
                    .then(res => {
                        console.log(updated.data);
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: 'Adopted Confirm',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        })

    }





    const handleDeletePet = pet => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/pets/${pet._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "This Pet has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

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
                        {
                            pets.filter(mypets => mypets.email === user.email).map((pets, index) =>
                                <tr key={pets._id}>
                                    <th>{index + 1}</th>
                                    <td className="flex justify-center"><div className="mask mask-squircle w-12 h-12">
                                        <img src={pets.image} />
                                    </div></td>
                                    <td>{pets.name}</td>
                                    <td>{pets.category}</td>
                                    <td>{pets.adopted === 'true' ? "Adopted" : "Not Adopted"}</td>
                                    <td>{pets.adopted === 'false' ? <button onClick={() => { handleAdoption(pets) }} className="border border-teal-800 hover:text-teal-800 px-4 py-1 rounded-lg text-sm" >
                                        <FaPaw></FaPaw>
                                    </button> :
                                        <button disabled className="  text-teal-800 px-4 py-1 rounded-lg text-sm" >
                                            <FaPaw></FaPaw>
                                        </button>
                                    }


                                    </td>
                                    <td>
                                        <NavLink to={`/dashboard/updatemypets/${pets._id}`}>  <button className="border border-yellow-800 hover:text-yellow-800 px-4 py-1 rounded-lg text-sm" >
                                            <FaRegEdit></FaRegEdit>
                                        </button></NavLink>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeletePet(pets)} className="border border-red-500 hover:text-red-500 px-4 py-1 rounded-lg text-sm " >
                                            <MdDelete></MdDelete>
                                        </button>

                                    </td>
                                </tr>

                            )


                        }

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

export default MyPets;