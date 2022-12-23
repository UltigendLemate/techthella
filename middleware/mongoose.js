import mongoose from "mongoose";

const connectDb = handler => async (req,res) => {
    if(mongoose.connections[0].readyState){
        return handler(req,res)
    }

    await mongoose.connect("mongodb+srv://noobkoda:noobkoda2004@expresso.7tk1f8j.mongodb.net/?retryWrites=true&w=majority")
        return handler(req,res)
    
}

export default connectDb;