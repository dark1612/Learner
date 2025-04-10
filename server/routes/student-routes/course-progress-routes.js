const express = require("express");
const {
  getCurrentCourseProgress,
  markCurrentLectureAsViewed,
  resetCurrentCourseProgress,
} = require("../../controllers/student-controller/course-progress-controller");

const router = express.Router();

<<<<<<< HEAD
router.get("/get/:userId/:courseId", getCurrentCourseProgress);
router.post("/mark-lecture-viewed", markCurrentLectureAsViewed);
router.post("/reset-progress", resetCurrentCourseProgress);
=======
// Adjusted route without userId dependency
router.get("/get/:courseId", getCurrentCourseProgress); // Removed userId
router.post("/mark-lecture-viewed", markCurrentLectureAsViewed);
router.post("/reset-progress", resetCurrentCourseProgress);

>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
module.exports = router;
