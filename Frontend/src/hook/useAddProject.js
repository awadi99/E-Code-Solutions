import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from "../api/apiClient.js";

export const useAddProject = ()=>{
    const queryClient = useQueryClient();

    const {
        data:productData,
        isPending:isProductsLoading,
        error:productsError,
        isFetching:isProductsFetching
    }=useQuery({
        queryKey:["myproducts"],
        queryFn: async()=>{
            try {
                const{data}= await apiClient.get("/user/my-product");
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



    const createProduct =useMutation({
        mutationFn:async(formData)=>{
            const {data}= await apiClient.post("/user/addproduct",formData);
            return data;        
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['myproducts']});
        }
    });



    const deleteProduct = useMutation({
        mutationFn:async(productId)=>{
            const {data} = await apiClient.delete
            (`/user/deleteproduct/${productId}`);
            return data;
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey:["myproducts"],
            });
        },
    }
);
    return{
        products: productData?.product || [],
        productCount: productData?.productCount || 0,
    
        isProductsLoading,
        productsError,
        isProductsFetching,
    
        // Mutations
        createProduct,
        deleteProduct,
    }
};

