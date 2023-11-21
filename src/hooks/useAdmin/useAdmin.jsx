import { useContext } from "react";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../providers/Auth/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const {user, isLoading} = useContext(AuthContext);
    const {data: isAdmin, isPending} = useQuery({
        queryKey: ['admin', user?.email],
        enabled: !isLoading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/admin/${user?.email}`)
            console.log(res.data)
            return res.data
        }
    })
    // console.log(isAdmin?.admin)
    return [isAdmin?.admin, isPending];
};

export default useAdmin;