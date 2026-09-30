import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100,
    },

    email:{
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
            "Please enter a valid email",
        ],
    },

    idea:{
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 2000,
    },

},   
{timestamps:true}
);

const getMessage = mongoose.model("getMessage",messageSchema);
export default getMessage;