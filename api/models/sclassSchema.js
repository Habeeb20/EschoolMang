import mongoose from "mongoose";

const sclassSchema = new mongoose.Schema({
    sclassName: {
        type: String,
        required: true,
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin'
    },
}, {timestamps: true})

const sclass = mongoose.model("sclass", sclassSchema)

export default sclass