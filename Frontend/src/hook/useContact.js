import apiClient  from "../api/apiClient.js";
import { useMutation } from '@tanstack/react-query';


export const useContact =()=>{

    const createContact = useMutation({
        mutationKey:["contact"],
        mutationFn:async(formData)=>{
            const contact = await apiClient.post("/contact/message",formData);
            return contact;
        },onSuccess:(data)=>{
            console.log("Contact submitted successfully");
        },onError:(error)=>{
            console.error(
                "Contact submission failed:",
                error.response?.data || error.message
            );
        },
    });
    return {
        createContact
    };
};