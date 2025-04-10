const express = require("express");
<<<<<<< HEAD
const {
  getCoursesByStudentId,
} = require("../../controllers/student-controller/student-courses-controller");

const router = express.Router();

router.get("/get/:studentId", getCoursesByStudentId);
=======
const router = express.Router();
const StudentCourses = require("../../models/StudentCourses");

// Define the route
router.get("/get", async (req, res) => {
  try {
    const studentCourses = await StudentCourses.findOne();
    if (!studentCourses) {
      return res.status(404).json({
        success: false,
        message: "No courses found",
      });
    }

    res.status(200).json({
      success: true,
      data: studentCourses.courses,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred!",
    });
  }
});
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815

module.exports = router;
