const CourseProgress = require("../../models/CourseProgress");
const Course = require("../../models/Course");

// Mark the current lecture as viewed
const markCurrentLectureAsViewed = async (req, res) => {
  try {
    const { courseId, lectureId } = req.body;

    // Find the progress for the course
    let progress = await CourseProgress.findOne({ courseId });
    if (!progress) {
      // If no progress exists, create a new progress entry
      progress = new CourseProgress({
        courseId,
        lecturesProgress: [
          {
            lectureId,
            viewed: true,
            dateViewed: new Date(),
          },
        ],
      });
      await progress.save();
    } else {
      // Check if the lecture is already marked as viewed
      const lectureProgress = progress.lecturesProgress.find(
        (item) => item.lectureId === lectureId
      );

      if (lectureProgress) {
        lectureProgress.viewed = true;
        lectureProgress.dateViewed = new Date();
      } else {
        // Add new lecture progress
        progress.lecturesProgress.push({
          lectureId,
          viewed: true,
          dateViewed: new Date(),
        });
      }
      await progress.save();
    }

    // Fetch the course details
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    // Check if all lectures are viewed
    const allLecturesViewed =
      progress.lecturesProgress.length === course.curriculum.length &&
      progress.lecturesProgress.every((item) => item.viewed);

    if (allLecturesViewed) {
      progress.completed = true;
      progress.completionDate = new Date();
      await progress.save();
    }

    res.status(200).json({
      success: true,
      message: "Lecture marked as viewed",
      data: progress,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};

// Get current course progress
const getCurrentCourseProgress = async (req, res) => {
  try {
    const { courseId } = req.params;

    // Fetch the course progress
    const currentCourseProgress = await CourseProgress.findOne({ courseId });

    if (!currentCourseProgress || currentCourseProgress?.lecturesProgress?.length === 0) {
      const course = await Course.findById(courseId);
      if (!course) {
        return res.status(404).json({
          success: false,
          message: "Course not found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "No progress found. You can start watching the course.",
        data: {
          courseDetails: course,
          progress: [],
          completed: false,
        },
      });
    }

    // Fetch the course details
    const courseDetails = await Course.findById(courseId);

    res.status(200).json({
      success: true,
      data: {
        courseDetails,
        progress: currentCourseProgress.lecturesProgress,
        completed: currentCourseProgress.completed,
        completionDate: currentCourseProgress.completionDate,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
    }
};

// Reset course progress
const resetCurrentCourseProgress = async (req, res) => {
  try {
    const { courseId } = req.body;

    const progress = await CourseProgress.findOne({ courseId });
    if (!progress) {
      return res.status(404).json({
        success: false,
        message: "Progress not found!",
      });
    }

    // Reset the progress
    progress.lecturesProgress = [];
    progress.completed = false;
    progress.completionDate = null;

    await progress.save();

    res.status(200).json({
      success: true,
      message: "Course progress has been reset",
      data: progress,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};

module.exports = {
  markCurrentLectureAsViewed,
  getCurrentCourseProgress,
  resetCurrentCourseProgress,
};
