import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../axiosPublic/useAxiosPublic";

const useCategory = () => {
    const axiosPublic = useAxiosPublic()
    const { isPending, data: categories, refetch } = useQuery({
        queryKey: ['categories'],
        queryFn:async () => {
           const res=await axiosPublic.get('/categories')
           return res.data
        }
    })
    return [categories,refetch,isPending]
};

export default useCategory;