import { useQuery } from "@tanstack/react-query";


const useMenu = (category) => {

    const {data, isLoading, refetch} = useQuery({
        queryKey: ['menuData'],
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/api/v1/allMenu');
            return response.json();
        }
    })
    if(category  && !isLoading) {
        const categorizedData = data.filter(menu => menu.category === category)
        return [categorizedData, isLoading, refetch];
    }

    return [data, isLoading, refetch];
   
};

export default useMenu;