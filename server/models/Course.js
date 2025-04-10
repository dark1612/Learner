<<<<<<< HEAD
const mongoose = require("mongoose");

const LectureSchema = new mongoose.Schema({
  title: String,
  videoUrl: String,
  public_id: String,
  freePreview: Boolean,
});

const CourseSchema = new mongoose.Schema({
  instructorId: String,
  instructorName: String,
  date: Date,
  title: String,
  category: String,
  level: String,
  primaryLanguage: String,
  subtitle: String,
  description: String,
  image: String,
  welcomeMessage: String,
  pricing: Number,
  objectives: String,
  students: [
    {
      studentId: String,
      studentName: String,
      studentEmail: String,
      paidAmount: String,
    },
  ],
  curriculum: [LectureSchema],
  isPublised: Boolean,
});

module.exports = mongoose.model("Course", CourseSchema);
=======
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
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
