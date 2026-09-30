import getMessage from "./doc.model.js"

export const createMessage =async(data)=>{
    return await getMessage.create(data);
}