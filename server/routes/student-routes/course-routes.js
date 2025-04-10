<<<<<<< HEAD
const express = require("express");
const {
  getStudentViewCourseDetails,
  getAllStudentViewCourses,
  checkCoursePurchaseInfo,
} = require("../../controllers/student-controller/course-controller");
const router = express.Router();

router.get("/get", getAllStudentViewCourses);
router.get("/get/details/:id", getStudentViewCourseDetails);
router.get("/purchase-info/:id/:studentId", checkCoursePurchaseInfo);

module.exports = router;
=======
const express=require("express");

const {getAllStudentViewCourses,getStudentViewCourseDetails} =require("../../controllers/student-controller/course-controller");
const router=express.Router();



router.get("/get",getAllStudentViewCourses);
router.get("/get/details/:id",getStudentViewCourseDetails);

module.exports=router;
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
