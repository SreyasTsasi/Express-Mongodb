import mongoose from "mongoose";

const Schema = new mongoose.Schema ({
username: {
        type:String
    },
    firstname: {
        type: String

    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    password:{
        type:String
    }
})

export default mongoose.model.Users || mongoose.model("User",Schema);