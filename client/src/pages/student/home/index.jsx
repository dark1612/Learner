import { courseCategories } from "@/config";
import banner from "../../../../public/banner-img.png";
import { Button } from "@/components/ui/button";
import { useContext, useEffect } from "react";
import { StudentContext } from "@/context/student-context";
<<<<<<< HEAD
import {
  checkCoursePurchaseInfoService,
  fetchStudentViewCourseListService,
} from "@/services";
import { AuthContext } from "@/context/auth-context";
=======
import { fetchStudentViewCourseListService } from "@/services";
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
import { useNavigate } from "react-router-dom";

function StudentHomePage() {
  const { studentViewCoursesList, setStudentViewCoursesList } =
    useContext(StudentContext);
<<<<<<< HEAD
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleNavigateToCoursesPage(getCurrentId) {
    console.log(getCurrentId);
    sessionStorage.removeItem("filters");
    const currentFilter = {
      category: [getCurrentId],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));

    navigate("/courses");
  }

=======

    function handleNavigateToCoursesPage(getCurrentId) {
      console.log(getCurrentId);
      sessionStorage.removeItem("filters");
      const currentFilter = {
        category: [getCurrentId],
      };
  
      sessionStorage.setItem("filters", JSON.stringify(currentFilter));
  
      navigate("/courses");
    }

  const navigate = useNavigate();

  // Fetch all courses
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
  async function fetchAllStudentViewCourses() {
    const response = await fetchStudentViewCourseListService();
    if (response?.success) setStudentViewCoursesList(response?.data);
  }

<<<<<<< HEAD
  async function handleCourseNavigate(getCurrentCourseId) {
    const response = await checkCoursePurchaseInfoService(
      getCurrentCourseId,
      auth?.user?._id
    );

    if (response?.success) {
      if (response?.data) {
        navigate(`/course-progress/${getCurrentCourseId}`);
      } else {
        navigate(`/course/details/${getCurrentCourseId}`);
      }
    }
  }

=======
  // Navigate to course categories page
 
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
  useEffect(() => {
    fetchAllStudentViewCourses();
  }, []);

  return (
    <div className="min-h-screen bg-white">
<<<<<<< HEAD
      <section className="flex flex-col lg:flex-row items-center justify-between py-8 px-4 lg:px-8">
        <div className="lg:w-1/2 lg:pr-12">
          <h1 className="text-4xl font-bold mb-4">Learning that gets you</h1>
          <p className="text-xl">
            Skills for your present and your future. Get started with us.
=======
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between py-8 px-4 lg:px-8">
        <div className="lg:w-1/2 lg:pr-12">
          <h1 className="text-5xl font-bold mb-4">Learning that gets you</h1>
          <p className="text-xl">
            Skills for your present and your future. Get Started with us.
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
          </p>
        </div>
        <div className="lg:w-full mb-8 lg:mb-0">
          <img
            src={banner}
<<<<<<< HEAD
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
            alt="Banner"
=======
            alt="Learning Banner"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
          />
        </div>
      </section>

<<<<<<< HEAD
=======
      {/* Course Categories Section */}
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
      <section className="py-8 px-4 lg:px-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6">Course Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {courseCategories.map((categoryItem) => (
            <Button
<<<<<<< HEAD
              className="justify-start"
              variant="outline"
              key={categoryItem.id}
=======
              key={categoryItem.id}
              className="justify-start"
              variant="outline"
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
              onClick={() => handleNavigateToCoursesPage(categoryItem.id)}
            >
              {categoryItem.label}
            </Button>
          ))}
        </div>
      </section>

<<<<<<< HEAD
=======
      {/* Featured Courses Section */}
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
      <section className="py-12 px-4 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">Featured Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {studentViewCoursesList && studentViewCoursesList.length > 0 ? (
            studentViewCoursesList.map((courseItem) => (
              <div
<<<<<<< HEAD
                key={courseItem._id} // ✅ Key added here
                onClick={() => handleCourseNavigate(courseItem?._id)}
                className="border rounded-lg overflow-hidden shadow cursor-pointer"
              >
                <img
                  src={courseItem?.image}
                  width={300}
                  height={150}
                  className="w-full h-40 object-cover"
                  alt={courseItem?.title}
                />
                <div className="p-4">
                  <h3 className="font-bold mb-2">{courseItem?.title}</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    {courseItem?.instructorName}
                  </p>
                  <p className="font-bold text-[16px]">
                    ${courseItem?.pricing}
=======
                key={courseItem._id} // Ensure unique keys using `_id`
                onClick={() => navigate(`/course/details/${courseItem?._id}`)}
                className="border rounded-lg overflow-hidden shadow cursor-pointer"
              >
                <img
                  src={courseItem?.image || "https://via.placeholder.com/300x150"}
                  alt={courseItem?.title || "Course Image"}
                  width={300}
                  height={150}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold mb-2">{courseItem?.title}</h3>
                  <p className="text-sm text-gray-500">
                    {courseItem?.description || "No description available"}
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
                  </p>
                </div>
              </div>
            ))
          ) : (
<<<<<<< HEAD
            <h1>No Courses Found</h1>
=======
            <h1 className="text-lg font-bold">No courses found!</h1>
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
          )}
        </div>
      </section>
    </div>
  );
}

export default StudentHomePage;
