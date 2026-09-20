import passport from "passport";
import { Strategy as googleStrategy } from "passport-google-oauth20";
import NewUser from './auth.model.js';

passport.use(
    new googleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:3000/api/auth/google/callback",
            passReqToCallback: true
        },
        async (req, accessToken, refreshToken, profile, done) => {
            try {
                const email = profile.emails?.[0]?.value?.toLowerCase();

                if (!email) {
                    return done(null, false, { message: "Email not found!" });
                };

                let user = await NewUser.findOne({ email });

                if (user) {
                    return done(null, user);
                };


                const state = JSON.parse(req.query.state || "{}");

                const role = state.role || "User";
                const companyName = state.companyName;
                const agencyName = state.agencyName;
                const service = state.service;

                if(!["User","Customer","Company"].includes(role)){
                    return done(null,false,{
                        message:"Invalid role"
                    });
                };
                

                if(role==="Company"){
                    if(!companyName || !agencyName ||!service){
                        return done(null,false,{
                            message:"Please complete all required company information"
                        });
                    };
                };

                if(role==="Customer"){
                    if(!service){
                        return done(null,false,{
                            message:"Service information is required to continue."
                        });
                    };
                };

                user=await NewUser.create({
                    fullName:profile.displayName,
                    email,
                    googleId:profile.id,
                    isGoogleUser:true,
                    role,

                    companyName:
                    role==="Company"
                    ? companyName
                    :undefined,

                    agencyName:
                    role==="Company"
                    ?agencyName
                    :undefined,

                    service:
                    role==="Customer" 
                    || role ==="Company"
                    ?service
                    :undefined,


                });

                return done(null, user);

            } catch (error) {
                console.error("Critical Google Strategy Error:", error);
                return done(error, null);
            };
        }
    )
);


export default passport;