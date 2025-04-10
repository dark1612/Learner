const CourseProgress = require("../../models/CourseProgress");
const Course = require("../../models/Course");
<<<<<<< HEAD
const StudentCourses = require("../../models/StudentCourses");

//mark current lecture as viewed
const markCurrentLectureAsViewed = async (req, res) => {
  try {
    const { userId, courseId, lectureId } = req.body;

    let progress = await CourseProgress.findOne({ userId, courseId });
    if (!progress) {
      progress = new CourseProgress({
        userId,
=======

// Mark the current lecture as viewed
const markCurrentLectureAsViewed = async (req, res) => {
  try {
    const { courseId, lectureId } = req.body;

    // Find the progress for the course
    let progress = await CourseProgress.findOne({ courseId });
    if (!progress) {
      // If no progress exists, create a new progress entry
      progress = new CourseProgress({
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
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
<<<<<<< HEAD
=======
      // Check if the lecture is already marked as viewed
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
      const lectureProgress = progress.lecturesProgress.find(
        (item) => item.lectureId === lectureId
      );

      if (lectureProgress) {
        lectureProgress.viewed = true;
        lectureProgress.dateViewed = new Date();
      } else {
<<<<<<< HEAD
=======
        // Add new lecture progress
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
        progress.lecturesProgress.push({
          lectureId,
          viewed: true,
          dateViewed: new Date(),
        });
      }
      await progress.save();
    }

<<<<<<< HEAD
    const course = await Course.findById(courseId);

=======
    // Fetch the course details
    const course = await Course.findById(courseId);
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

<<<<<<< HEAD
    //check all the lectures are viewed or not
=======
    // Check if all lectures are viewed
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
    const allLecturesViewed =
      progress.lecturesProgress.length === course.curriculum.length &&
      progress.lecturesProgress.every((item) => item.viewed);

    if (allLecturesViewed) {
      progress.completed = true;
      progress.completionDate = new Date();
<<<<<<< HEAD

=======
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
      await progress.save();
    }

    res.status(200).json({
      success: true,
      message: "Lecture marked as viewed",
      data: progress,
    });
  } catch (error) {
<<<<<<< HEAD
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
=======
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
    });
  }
};

<<<<<<< HEAD
//get current course progress
const getCurrentCourseProgress = async (req, res) => {
  try {
    const { userId, courseId } = req.params;

    const studentPurchasedCourses = await StudentCourses.findOne({ userId });

    const isCurrentCoursePurchasedByCurrentUserOrNot =
      studentPurchasedCourses?.courses?.findIndex(
        (item) => item.courseId === courseId
      ) > -1;

    if (!isCurrentCoursePurchasedByCurrentUserOrNot) {
      return res.status(200).json({
        success: true,
        data: {
          isPurchased: false,
        },
        message: "You need to purchase this course to access it.",
      });
    }

    const currentUserCourseProgress = await CourseProgress.findOne({
      userId,
      courseId,
    });

    if (
      !currentUserCourseProgress ||
      currentUserCourseProgress?.lecturesProgress?.length === 0
    ) {
=======
// Get current course progress
const getCurrentCourseProgress = async (req, res) => {
  try {
    const { courseId } = req.params;

    // Fetch the course progress
    const currentCourseProgress = await CourseProgress.findOne({ courseId });

    if (!currentCourseProgress || currentCourseProgress?.lecturesProgress?.length === 0) {
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
      const course = await Course.findById(courseId);
      if (!course) {
        return res.status(404).json({
          success: false,
          message: "Course not found",
        });
      }

      return res.status(200).json({
        success: true,
<<<<<<< HEAD
        message: "No progress found, you can start watching the course",
        data: {
          courseDetails: course,
          progress: [],
          isPurchased: true,
=======
        message: "No progress found. You can start watching the course.",
        data: {
          courseDetails: course,
          progress: [],
          completed: false,
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
        },
      });
    }

<<<<<<< HEAD
=======
    // Fetch the course details
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
    const courseDetails = await Course.findById(courseId);

    res.status(200).json({
      success: true,
      data: {
        courseDetails,
<<<<<<< HEAD
        progress: currentUserCourseProgress.lecturesProgress,
        completed: currentUserCourseProgress.completed,
        completionDate: currentUserCourseProgress.completionDate,
        isPurchased: true,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

//reset course progress

const resetCurrentCourseProgress = async (req, res) => {
  try {
    const { userId, courseId } = req.body;

    const progress = await CourseProgress.findOne({ userId, courseId });

=======
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
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
    if (!progress) {
      return res.status(404).json({
        success: false,
        message: "Progress not found!",
      });
    }

<<<<<<< HEAD
=======
    // Reset the progress
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
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
<<<<<<< HEAD
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
=======
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
    });
  }
};

module.exports = {
  markCurrentLectureAsViewed,
  getCurrentCourseProgress,
  resetCurrentCourseProgress,
};
