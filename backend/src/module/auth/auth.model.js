import mongoose from "mongoose";

const NewUserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        index:true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            "Please enter a valid email",
        ],
    },
    password: {
        type: String,
        required: function () {
            return !this.isGoogleUser;
        },
        minLength: 8,
        select: false, // Security: Query mein password default nahi aayega
    },
    role: {
        type: String,
        enum: ["User", "Customer", "Company"],
        default: "User",
        required: true
    },

    isGoogleUser: {
        type: Boolean,
        default: false,
    },

    companyName: {
        type: String,
        required: function () {
            return this.role === "Company";
        }, trim: true,

    },

    agencyName: {
        type: String,
        required: function () {
            return this.role === "Company";
        }, trim: true,
    },
    service: {
        type: String,
        required: function () {
            return this.role === "Company" || this.role === "Customer";
        },
        trim: true,
    },
},
    { timestamps: true }
);


const NewUser = mongoose.model("NewUser", NewUserSchema);

export default NewUser;
