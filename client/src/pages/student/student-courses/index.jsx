import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  courseCurriculumInitialFormData,
  courseLandingInitialFormData,
} from "@/config";
import { deleteCourseByIdService } from "@/services";
import { InstructorContext } from "@/context/instructor-context";
import { Delete, Edit } from "lucide-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

function InstructorCourses({ listOfCourses, refreshCourses }) {
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);
  
  const {
    setCurrentEditedCourseId,
    setCourseLandingFormData,
    setCourseCurriculumFormData,
  } = useContext(InstructorContext);

  const handleDelete = async (courseId) => {
    const confirm = window.confirm("Are you sure you want to delete this course?");
    if (!confirm) return;
    
    try {
      setIsDeleting(true);
      const response = await deleteCourseByIdService(courseId);
      
      if (response?.success) {
        alert("Course deleted successfully!");
        // Make sure refreshCourses is actually a function before calling it
        if (typeof refreshCourses === 'function') {
          refreshCourses(); // 🔄 Refetch updated course list
        }
      } else {
        // Handle case where response exists but success is false
        alert(`Failed to delete the course: ${response?.message || 'Unknown error'}`);
      }
    } catch (error) {
      // Handle any errors thrown during the deletion process
      console.error("Error deleting course:", error);
      alert(`Error deleting course: ${error.message}`);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Card>
      <CardHeader className="flex justify-between flex-row items-center">
        <CardTitle className="text-3xl font-extrabold">All Courses</CardTitle>
        <Button
          onClick={() => {
            setCurrentEditedCourseId(null);
            setCourseLandingFormData(courseLandingInitialFormData);
            setCourseCurriculumFormData(courseCurriculumInitialFormData);
            navigate("/instructor/create-new-course");
          }}
          className="p-6"
        >
          Create New Course
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {listOfCourses && listOfCourses.length > 0 ? (
                listOfCourses.map((course) => (
                  <TableRow key={course._id}>
                    <TableCell className="font-medium">
                      {course?.title}
                    </TableCell>
                    <TableCell>{course?.students?.length || 0}</TableCell>
                    <TableCell>
                      ${(course?.students?.length || 0) * (course?.pricing || 0)}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        onClick={() =>
                          navigate(`/instructor/edit-course/${course?._id}`)
                        }
                        variant="ghost"
                        size="sm"
                      >
                        <Edit className="h-6 w-6" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(course._id)}
                        disabled={isDeleting}
                      >
                        <Delete className="h-6 w-6 text-red-500" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan="4" className="text-center py-4">
                    No courses found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

export default InstructorCourses;
=======
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { StudentContext } from "@/context/student-context";
import { fetchStudentBoughtCoursesService } from "@/services";
import { Watch } from "lucide-react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function StudentCoursesPage() {
  const { studentBoughtCoursesList, setStudentBoughtCoursesList } =
    useContext(StudentContext);
  const navigate = useNavigate();

  async function fetchStudentBoughtCourses() {
    const response = await fetchStudentBoughtCoursesService();
    if (response?.success) {
      setStudentBoughtCoursesList(response?.data);
    } else {
      console.error("Failed to fetch courses", response?.message);
    }
  }

  useEffect(() => {
    fetchStudentBoughtCourses();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-8">My Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {studentBoughtCoursesList && studentBoughtCoursesList.length > 0 ? (
          studentBoughtCoursesList.map((course) => (
            <Card key={course.courseId} className="flex flex-col">
              <CardContent className="p-4 flex-grow">
                <img
                  src={course?.courseImage || "https://via.placeholder.com/150"}
                  alt={course?.title}
                  className="h-52 w-full object-cover rounded-md mb-4"
                />
                <h3 className="font-bold mb-1">{course?.title}</h3>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() =>
                    navigate(`/course-progress/${course?.courseId}`)
                  }
                  className="flex-1"
                >
                  <Watch className="mr-2 h-4 w-4" />
                  Start Watching
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <h1 className="text-3xl font-bold">No Courses Found</h1>
        )}
      </div>
    </div>
  );
}

export default StudentCoursesPage;
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
