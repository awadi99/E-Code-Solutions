import {createContact} from './contact.repository.js';

export const createContactMessage = async({name,email,message})=>{
    
    if(!name || !email || !message){
        throw new Error("Please complete all required fields.");
    }

    const contact = await createContact({
        name,
        email,
        message
    });

    return contact;
};