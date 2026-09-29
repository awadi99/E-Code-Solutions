import { createContactMessage } from "./contact.service.js";


export const createContactOne = async(req,res)=>{
    try {
        const contact = await createContactMessage(req.body);
        res.status(200).json({
            _id:contact._id,
            name:contact.name,
            email:contact.email,
            message:contact.message
        });
        return contact;
    } catch (error) {
        res.status(400).json({
            error,
            message:error.message
        });
    };
};