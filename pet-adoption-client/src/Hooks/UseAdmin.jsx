import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseSecureAxios from "./UseSecureAxios";


const UseAdmin = () => {
    const { user } = UseAuth();
    const axiosSecure = UseSecureAxios();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            console.log(user.email);
            const res = await axiosSecure.get(`/users/${user.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading];
};

export default UseAdmin;