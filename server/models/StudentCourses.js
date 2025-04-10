const mongoose = require("mongoose");

const StudentCoursesSchema = new mongoose.Schema({
<<<<<<< HEAD
  userId: String,
=======
 
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
  courses: [
    {
      courseId: String,
      title: String,
<<<<<<< HEAD
      instructorId: String,
      instructorName: String,
      dateOfPurchase: Date,
=======
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
      courseImage: String,
    },
  ],
});

<<<<<<< HEAD
module.exports = mongoose.model("StudentCourses", StudentCoursesSchema);
=======
module.exports = mongoose.model("StudentCourses", StudentCoursesSchema);
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
