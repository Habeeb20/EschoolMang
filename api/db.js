import mongoose from "mongoose";

const connectDb = async() => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
        if(connect){
            console.log("Database is connected")
        }else{
            console.log("there is an error")
        }
    } catch (error) {
        console.log("you are not connected to internet")
    }
 
}

export default connectDb