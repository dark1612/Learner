const mongoose = require("mongoose");

const StudentCoursesSchema = new mongoose.Schema({
 
  courses: [
    {
      courseId: String,
      title: String,
      courseImage: String,
    },
  ],
});

module.exports = mongoose.model("StudentCourses", StudentCoursesSchema);