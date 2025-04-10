<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
=======
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
<<<<<<< HEAD
import {
  courseCurriculumInitialFormData,
  courseLandingInitialFormData,
} from "@/config";
import { deleteCourseByIdService } from "@/services";
import { InstructorContext } from "@/context/instructor-context";
import { Delete, Edit } from "lucide-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

function InstructorCourses({ listOfCourses, refreshCourses, setListOfCourses }) {
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);
  
=======
import { courseLandingInitialFormData, courseCurriculumInitialFormData } from "@/config";
import { InstructorContext } from "@/context/instructor-context";
import { deleteCourseByIdService } from "@/services";
import { Edit, Delete } from "lucide-react";
import { useContext } from "react";

function AdminCourses({ listOfCourses = [] }) {
  const navigate = useNavigate(); // Ensure useNavigate is defined
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
  const {
    setCurrentEditedCourseId,
    setCourseLandingFormData,
    setCourseCurriculumFormData,
  } = useContext(InstructorContext);

<<<<<<< HEAD
  const handleDelete = async (courseId) => {
    const confirm = window.confirm("Are you sure you want to delete this course?");
    if (!confirm) return;
    
    try {
      setIsDeleting(true);
      const response = await deleteCourseByIdService(courseId);
      
      if (response?.success) {
        // Update local state directly for immediate UI update
        if (setListOfCourses) {
          setListOfCourses(prevCourses => 
            prevCourses.filter(course => course._id !== courseId)
          );
        } else if (refreshCourses) {
          // Fall back to refresh if setter isn't available
          refreshCourses();
        }
        alert("Course deleted successfully!");
      } else {
        alert(`Failed to delete the course: ${response?.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error("Error deleting course:", error);
      alert(`Error deleting course: ${error.message}`);
    } finally {
      setIsDeleting(false);
=======
  // const listOfCourses = Array.from(
  //   new Map(listOfCourses.map((course) => [course.title, course])).values()
  // );
 

  const handleDeleteCourse = async (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        const response = await deleteCourseByIdService(id);
        if (response?.success) {
          alert("Course deleted successfully!");
          // Trigger a state update or re-fetch courses here
        }
      } catch (error) {
        console.error("Failed to delete course:", error);
        alert("Failed to delete course. Please try again.");
      }
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
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
<<<<<<< HEAD
                <TableHead>Revenue</TableHead>
=======
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
<<<<<<< HEAD
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
=======
              {listOfCourses.length > 0 ? (
                listOfCourses.map((course, index) => (
                  <TableRow key={course._id}>
                    <TableCell className="font-medium">{course?.title}</TableCell>
                    <TableCell>{course?.students?.length || 0}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        onClick={() => navigate(`/instructor/edit-course/${course._id}`)}
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
                        variant="ghost"
                        size="sm"
                      >
                        <Edit className="h-6 w-6" />
                      </Button>
                      <Button
<<<<<<< HEAD
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(course._id)}
                        disabled={isDeleting}
                      >
                        <Delete className="h-6 w-6 text-red-500" />
=======
                        onClick={() => handleDeleteCourse(course._id)}
                        variant="ghost"
                        size="sm"
                      >
                        <Delete className="h-6 w-6" />
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
<<<<<<< HEAD
                  <TableCell colSpan="4" className="text-center py-4">
                    No courses found.
=======
                  <TableCell colSpan="3" className="text-center">
                    No courses available.
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
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

<<<<<<< HEAD
export default InstructorCourses;
=======
export default AdminCourses;
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
