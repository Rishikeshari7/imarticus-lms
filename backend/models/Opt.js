const mongoose=require("mongoose");

const otpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
    },
    otp:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:300, 
    },
}) 
module.exports = mongoose.model("Otp", otpSchema);