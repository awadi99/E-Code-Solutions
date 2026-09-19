import NewUser from "./auth.model.js";

export const findUserByEmail = async(email)=>{
    return await NewUser.findOne({email});
};

export const findUserByEmailForLogin = async(email)=>{
    return await NewUser.findOne({email}).select("+password").lean();
};

export const createUser = async(data)=>{
    return await NewUser.create(data);
};

export const findUserById = async(userId)=>{
    return await NewUser.findById(userId);
}