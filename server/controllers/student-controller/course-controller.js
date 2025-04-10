<<<<<<< HEAD
const Course = require("../../models/Course");
const StudentCourses = require("../../models/StudentCourses");

const getAllStudentViewCourses = async (req, res) => {
  try {
    const {
      category = [],
      level = [],
      primaryLanguage = [],
      sortBy = "price-lowtohigh",
    } = req.query;

    console.log(req.query, "req.query");

    let filters = {};
=======
const Course=require('../../models/Course')
const StudentCourses=require("../../models/StudentCourses");
const getAllStudentViewCourses =async(req,res)=>{
    try{
        const {
            category = [],
            level = [],
            primaryLanguage = [],
            sortBy = "title-atoz",
          } = req.query;
      
        let filters = {};
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
    if (category.length) {
      filters.category = { $in: category.split(",") };
    }
    if (level.length) {
      filters.level = { $in: level.split(",") };
    }
    if (primaryLanguage.length) {
      filters.primaryLanguage = { $in: primaryLanguage.split(",") };
    }

    let sortParam = {};
    switch (sortBy) {
<<<<<<< HEAD
      case "price-lowtohigh":
        sortParam.pricing = 1;

        break;
      case "price-hightolow":
        sortParam.pricing = -1;

        break;
      case "title-atoz":
        sortParam.title = 1;
=======
      case "title-atoz":
      sortParam.title = 1;
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815

        break;
      case "title-ztoa":
        sortParam.title = -1;

        break;

      default:
<<<<<<< HEAD
        sortParam.pricing = 1;
        break;
    }

    const coursesList = await Course.find(filters).sort(sortParam);

    res.status(200).json({
      success: true,
      data: coursesList,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const getStudentViewCourseDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const courseDetails = await Course.findById(id);

    if (!courseDetails) {
      return res.status(404).json({
        success: false,
        message: "No course details found",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      data: courseDetails,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const checkCoursePurchaseInfo = async (req, res) => {
  try {
    const { id, studentId } = req.params;

    const studentCourses = await StudentCourses.findOne({ userId: studentId });

    if (!studentCourses) {
      // User has not bought any course
      return res.status(200).json({
        success: true,
        data: false,
      });
    }

    const ifStudentAlreadyBoughtCurrentCourse =
      studentCourses.courses.findIndex((item) => item.courseId === id) > -1;

    res.status(200).json({
      success: true,
      data: ifStudentAlreadyBoughtCurrentCourse,
    });
  } catch (e) {
    console.log("Error in checkCoursePurchaseInfo:", e);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};


module.exports = {
  getAllStudentViewCourses,
  getStudentViewCourseDetails,
  checkCoursePurchaseInfo,
};
=======
        sortParam.title = 1;
        break;
    }


        const coursesList=await Course.find(filters).sort(sortParam);

     
        res.status(200).json({
            success:true,
            data:coursesList,
        });

    }
    catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message:"Some error occured!",
        });
    }
};



const getStudentViewCourseDetails =async(req,res)=>{
    try{
        const {id}=req.params;
        const courseDetails= await Course.findById(id);

        if(!courseDetails){
            return res.status(404).json({
                success:false,
                message:"No course found",
                data:null,
            });
        }
        
        res.status(200).json({
            success:true,
            data:courseDetails,
        });


        

    }
    catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message:'Some error occured!'
        })
    }
};


module.exports={getAllStudentViewCourses,getStudentViewCourseDetails};
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
