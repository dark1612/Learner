const mongoose=require("mongoose");

const LectureSchema=new mongoose.Schema({
    title:String,
    videoUrl:String,
    public_id:String,


});
const CourseSchema=new mongoose.Schema({
   
    date: Date,
    title: String,
    category: String,
    level: String,
    primaryLanguage: String,
    subtitle: String,
    description: String,
    image: String,
    welcomeMessage: String,
    objectives: String,
    
    
    curriculum:[LectureSchema],



});

module.exports=mongoose.model("Course",CourseSchema);