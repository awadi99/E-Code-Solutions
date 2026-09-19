import bcrypt from "bcryptjs";
import { findUserByEmail,findUserByEmailForLogin,createUser } from "./auth.repository.js";


export const signupService = async({role,fullName,email,password,companyName,agencyName,service})=>{

    if(role ==="Company"){
        if(!companyName||!agencyName||!service){
            throw new Error("Please complete all required fields.");
        };
    }
    else if(role==="Customer"){
        if(!service){
            throw new Error("Please complete all required fields.");
        };
    };

    const existingUser = await findUserByEmail(email);
    if(existingUser){
        throw new Error("User already exists");
    };

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const user = await createUser({
        role,
        fullName,
        email,
        password:hashedPassword,
        companyName,
        agencyName,
        service
    });

    return user;
};


export const signinService = async ({email,password})=>{ 
    const user = await findUserByEmailForLogin(email);
    
    if(!user || !(await bcrypt.compare(password,user.password))){
        throw new Error("Invalid email or password");
    };
    return user;
};