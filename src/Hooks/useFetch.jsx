import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetch = (key, url) => {
    return useQuery({
        queryKey: [key],
        queryFn: async()=>{
            const res = await axios.get(url)
            return res.data
        }
    })
};

export default useFetch;