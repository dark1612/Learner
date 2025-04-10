const mongoose = require("mongoose");

const LectureProgressSchema = new mongoose.Schema({
  lectureId: String,
  viewed: Boolean,
  dateViewed: Date,
});

const CourseProgressSchema = new mongoose.Schema({
<<<<<<< HEAD
  userId: String,
=======
  
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
  courseId: String,
  completed: Boolean,
  completionDate: Date,
  lecturesProgress: [LectureProgressSchema],
});

module.exports = mongoose.model("Progress", CourseProgressSchema);
