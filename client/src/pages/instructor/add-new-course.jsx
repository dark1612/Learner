import CourseCurriculum from "@/components/instructor-view/courses/add-new-course/course-curriculum";
import CourseLanding from "@/components/instructor-view/courses/add-new-course/course-landing";
<<<<<<< HEAD
import CourseSettings from "@/components/instructor-view/courses/add-new-course/course-settings";
=======
import CourseSettings from "@/components/instructor-view/courses/add-new-course/course-setting";
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  courseCurriculumInitialFormData,
  courseLandingInitialFormData,
} from "@/config";
<<<<<<< HEAD
import { AuthContext } from "@/context/auth-context";
import { InstructorContext } from "@/context/instructor-context";
import {
  addNewCourseService,
  fetchInstructorCourseDetailsService,
  updateCourseByIdService,
} from "@/services";
=======

import { InstructorContext } from "@/context/instructor-context";
import { addNewCourseService, 
    fetchInstructorCourseDetailsService, 
    updateCourseByIdService} from "@/services";
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddNewCoursePage() {
  const {
    courseLandingFormData,
    courseCurriculumFormData,
    setCourseLandingFormData,
    setCourseCurriculumFormData,
    currentEditedCourseId,
    setCurrentEditedCourseId,
  } = useContext(InstructorContext);

<<<<<<< HEAD
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const params = useParams();

  console.log(params);
=======
  
  const navigate = useNavigate();
  const params=useParams();
  console.log("Params from useParams:",params);
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815

  function isEmpty(value) {
    if (Array.isArray(value)) {
      return value.length === 0;
    }

    return value === "" || value === null || value === undefined;
  }

  function validateFormData() {
    for (const key in courseLandingFormData) {
      if (isEmpty(courseLandingFormData[key])) {
        return false;
      }
    }

    let hasFreePreview = false;

    for (const item of courseCurriculumFormData) {
      if (
        isEmpty(item.title) ||
        isEmpty(item.videoUrl) ||
        isEmpty(item.public_id)
      ) {
        return false;
      }

      if (item.freePreview) {
<<<<<<< HEAD
        hasFreePreview = true; //found at least one free preview
=======
        hasFreePreview = true;
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
      }
    }

    return hasFreePreview;
  }

  async function handleCreateCourse() {
    const courseFinalFormData = {
<<<<<<< HEAD
      instructorId: auth?.user?._id,
      instructorName: auth?.user?.userName,
=======
      
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
      date: new Date(),
      ...courseLandingFormData,
      students: [],
      curriculum: courseCurriculumFormData,
<<<<<<< HEAD
      isPublised: true,
    };

    const response =
      currentEditedCourseId !== null
        ? await updateCourseByIdService(
            currentEditedCourseId,
            courseFinalFormData
          )
        : await addNewCourseService(courseFinalFormData);
=======
      isPublished: true,
    };

    const response = 
    currentEditedCourseId!==null ? await updateCourseByIdService(currentEditedCourseId,courseFinalFormData):
    await addNewCourseService(courseFinalFormData);
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815

    if (response?.success) {
      setCourseLandingFormData(courseLandingInitialFormData);
      setCourseCurriculumFormData(courseCurriculumInitialFormData);
      navigate(-1);
      setCurrentEditedCourseId(null);
    }

    console.log(courseFinalFormData, "courseFinalFormData");
  }
<<<<<<< HEAD

=======
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
  async function fetchCurrentCourseDetails() {
    const response = await fetchInstructorCourseDetailsService(
      currentEditedCourseId
    );

    if (response?.success) {
      const setCourseFormData = Object.keys(
        courseLandingInitialFormData
      ).reduce((acc, key) => {
        acc[key] = response?.data[key] || courseLandingInitialFormData[key];

        return acc;
      }, {});

      console.log(setCourseFormData, response?.data, "setCourseFormData");
      setCourseLandingFormData(setCourseFormData);
      setCourseCurriculumFormData(response?.data?.curriculum);
    }

<<<<<<< HEAD
    console.log(response, "response");
=======
      console.log(response, "response");
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
  }

  useEffect(() => {
    if (currentEditedCourseId !== null) fetchCurrentCourseDetails();
  }, [currentEditedCourseId]);

<<<<<<< HEAD
  useEffect(() => {
    if (params?.courseId) setCurrentEditedCourseId(params?.courseId);
  }, [params?.courseId]);

  console.log(params, currentEditedCourseId, "params");
=======
  useEffect(()=>{
    if(params?.courseId) setCurrentEditedCourseId(params?.courseId);

  },[params?.courseId]);


>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-extrabold mb-5">Create a new course</h1>
        <Button
<<<<<<< HEAD
          disabled={!validateFormData()}
=======
          // disabled={!validateFormData()}
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
          className="text-sm tracking-wider font-bold px-8"
          onClick={handleCreateCourse}
        >
          SUBMIT
        </Button>
      </div>
      <Card>
        <CardContent>
          <div className="container mx-auto p-4">
            <Tabs defaultValue="curriculum" className="space-y-4">
              <TabsList>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="course-landing-page">
                  Course Landing Page
                </TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="curriculum">
                <CourseCurriculum />
              </TabsContent>
              <TabsContent value="course-landing-page">
                <CourseLanding />
              </TabsContent>
              <TabsContent value="settings">
                <CourseSettings />
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

<<<<<<< HEAD
=======
// Export must be at the top level
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
export default AddNewCoursePage;
