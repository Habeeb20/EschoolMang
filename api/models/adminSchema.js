import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email: {
        type:String,
        unique: true,
        requried:true,
    },
    password:{
        type:String,
        required: true,
    },

    role: {
        type:String,
        defualt:"Admin"
    },

    schoolName:{
        type:String,
        unique: true,
        required: true
    }

});

const Admin = mongoose.model("Admin", adminSchema)

export default Admin