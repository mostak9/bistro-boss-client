import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../providers/Auth/AuthProvider";


const useCarts = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const {data, isLoading, refetch} = useQuery({
        queryKey: ['allCarts', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`api/v1/allCarts?email=${user.email}`);
            return res.data;
        },
       
    })
    return [data, isLoading, refetch]
};

export default useCarts;