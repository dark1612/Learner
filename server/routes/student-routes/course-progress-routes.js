const express = require("express");
const {
  getCurrentCourseProgress,
  markCurrentLectureAsViewed,
  resetCurrentCourseProgress,
} = require("../../controllers/student-controller/course-progress-controller");

const router = express.Router();

// Adjusted route without userId dependency
router.get("/get/:courseId", getCurrentCourseProgress); // Removed userId
router.post("/mark-lecture-viewed", markCurrentLectureAsViewed);
router.post("/reset-progress", resetCurrentCourseProgress);

module.exports = router;
