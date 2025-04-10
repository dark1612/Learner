const StudentCourses = require("../../models/StudentCourses");

<<<<<<< HEAD
const getCoursesByStudentId = async (req, res) => {
  try {
    const { studentId } = req.params;
    const studentBoughtCourses = await StudentCourses.findOne({
      userId: studentId,
    });

    res.status(200).json({
      success: true,
      data: studentBoughtCourses.courses,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
=======
const getCourses = async (req, res) => {
  try {
    // Fetch all courses (no filtering by studentId or payment)
    const studentBoughtCourses = await StudentCourses.findOne();

    if (!studentBoughtCourses || studentBoughtCourses.courses.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No courses found.",
      });
    }

    res.status(200).json({
      success: true,
      data: studentBoughtCourses.courses, // Return the list of courses
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
    });
  }
};

<<<<<<< HEAD
module.exports = { getCoursesByStudentId };
=======
module.exports = { getCourses };
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
