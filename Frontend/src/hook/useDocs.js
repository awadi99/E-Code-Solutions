
import {useMutation} from "@tanstack/react-query";
import apiClient from "../api/apiClient";

export const useDocs = ()=>{
    const createDocs = useMutation({
        mutationKey:["myDocs"],
        mutationFn:async(formData)=>{
            const docs  = await apiClient.post("docs/idea",formData);
            return docs;
        },onSuccess:(data)=>{
            console.log("Message submitted successfully")
        },onError:(error)=>{
            console.error(
                "Message submission failed:",
                error.response?.data || error.message
            );
        },
    });
    return{
        createDocs
    }
};

