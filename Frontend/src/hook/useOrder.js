import { useQueryClient,useQuery } from "@tanstack/react-query";
import apiClient  from "../api/apiClient.js";

export const useProduct=()=>{
    const queryClient = useQueryClient();
    const {
        data:productData,
        isPending:isProductsLoading,
        error:productsError,
        isFetching:isProductsFetching
    }=useQuery({
        queryKey:['products'],
        queryFn:async()=>{
            try {
                const{data} = await apiClient.get("/order/products");
                return data;
            } catch (error) {
                if(error.response?.status===401)return null;
                throw error;
            }
        },
        staleTime:1000*60*15,
        retry:false,
        refetchOnWindowFocus:false,
    });



    const buyProduct =  async (productId)=>{
        try {
            const {data} = await apiClient.get(
                `/order/buy/${productId}`
            );
            return data;
        } catch (error) {
            if(error.response?.status===401)return null;
            throw error
        };
    };


return{
    products: productData?.product || [],
    isProductsLoading,
        productsError,
        isProductsFetching,
        buyProduct
};
};