import {useMutation, useQuery,useQueryClient} from "@tanstack/react-query";
import apiClient from "../api/apiClient.js";

export const useAuth =()=>{
    const queryClient = useQueryClient();
    const{data:user,isPending,error,isFetching}= useQuery({
        queryKey:["authUser"],
        queryFn: async ()=>{
            try {
                const {data} = await apiClient.get('/auth/me');
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

    const logout =async()=>{
        try {
            await apiClient.post('/auth/logout');
        } catch (error) {
            console.error("Logout API failed", error);
        }finally{
            queryClient.clear();
            sessionStorage.clear();
            localStorage.clear();
            window.location.href = '/'; 
        };
    };



    const registerUser = useMutation({
        mutationFn: async(userData)=>{
            const {data} = await apiClient.post("/auth/register",userData);
            return data;
        }
    });

    const loginUser =useMutation({
        mutationFn: async(credentials)=>{
            const {data}= await apiClient.post("/auth/login",credentials);
            return data;
        },
        onSuccess: (data)=>{
            const LoggedInUser = data.user || data;
            queryClient.setQueryData(['authUser'],LoggedInUser);
            queryClient.invalidateQueries({queryKey: ['authUser']});
        }
    });


    return {
        user, 
        isLoading:isPending,
        logout,
        registerUser,
        loginUser,
    }
};