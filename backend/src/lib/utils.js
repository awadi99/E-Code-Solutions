import jwt from "jsonwebtoken";

export const generateToken =(userData,res)=>{
    const token=jwt.sign({
        id:userData.id,
        role:userData.role

    },
    process.env.JWT_SECRET,
    {expiresIn:`7d`}
    );
    res.cookie("jwt",token,{
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 7 * 24 * 60 * 60 * 1000
    });
    return token;
}