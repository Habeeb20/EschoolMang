import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },

    rollNum: {
        type:Number,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    sclassName:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'sclass',
        required: true,
    },

    role: {
        type:String,
        default: "Student"
    },
    examResult: [
        {
            subName: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'subject',
            },
            marksObtained: {
                type: Number,
                default: 0
            }
        }
    ],
    attendance: [{
        date: {
            type: Date,
            required: true
        },
        status: {
            type: String,
            enum: ['Present', 'Absent'],
            required: true
        },
        subName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'subject',
            required: true
        }
    }]

    
})

const student = mongoose.model("student", studentSchema)
export default student