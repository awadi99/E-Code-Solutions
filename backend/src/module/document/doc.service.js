import {createMessage} from "./doc.repository.js";


export const createIdea = async({fullName,email,idea})=>{
    if(!fullName || !email || !idea){
        throw new Error("Please complete all required fields.");
    }

    const ideas = await createMessage({
        fullName,
        email,
        idea
    });
    return ideas;
};

