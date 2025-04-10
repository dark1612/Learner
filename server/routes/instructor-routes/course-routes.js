const express = require("express");
const {
  addNewCourse,
  getAllCourses,
  getCourseDetailsByID,
  updateCourseByID,
<<<<<<< HEAD
  deleteCourseById,
=======
  deleteCourseByID,
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
} = require("../../controllers/instructor-controller/course-controller");
const router = express.Router();

router.post("/add", addNewCourse);
router.get("/get", getAllCourses);
router.get("/get/details/:id", getCourseDetailsByID);
router.put("/update/:id", updateCourseByID);
<<<<<<< HEAD
router.delete("/:id", deleteCourseById);

module.exports = router;
=======
router.delete("/delete/:id", deleteCourseByID);



module.exports = router;
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
