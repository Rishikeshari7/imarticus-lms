import mongoose from 'mongoose'

const LectureSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    type:{
        type:String,
        enum:["quiz","lecture"],
        default:"lecture"
    },
    content:{
        type:String,
        default:""
    }
})

const SectionSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    lectures:[LectureSchema]
    
})

const CourseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    batch:{
        type:String,
        required:true,
        trim:true,
    },
    price:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        enum:["Upcoming","Ongoing","Completed"],
        default:"Ongoing"
    },
    sections:[SectionSchema],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

export default mongoose.model("Course", CourseSchema);