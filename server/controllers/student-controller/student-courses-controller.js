const StudentCourses = require("../../models/StudentCourses");

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
    });
  }
};

module.exports = { getCourses };
