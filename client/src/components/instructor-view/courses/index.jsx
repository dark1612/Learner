import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { courseLandingInitialFormData, courseCurriculumInitialFormData } from "@/config";
import { InstructorContext } from "@/context/instructor-context";
import { deleteCourseByIdService } from "@/services";
import { Edit, Delete } from "lucide-react";
import { useContext } from "react";

function AdminCourses({ listOfCourses = [] }) {
  const navigate = useNavigate(); // Ensure useNavigate is defined
  const {
    setCurrentEditedCourseId,
    setCourseLandingFormData,
    setCourseCurriculumFormData,
  } = useContext(InstructorContext);

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
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {listOfCourses.length > 0 ? (
                listOfCourses.map((course, index) => (
                  <TableRow key={course._id}>
                    <TableCell className="font-medium">{course?.title}</TableCell>
                    <TableCell>{course?.students?.length || 0}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        onClick={() => navigate(`/instructor/edit-course/${course._id}`)}
                        variant="ghost"
                        size="sm"
                      >
                        <Edit className="h-6 w-6" />
                      </Button>
                      <Button
                        onClick={() => handleDeleteCourse(course._id)}
                        variant="ghost"
                        size="sm"
                      >
                        <Delete className="h-6 w-6" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan="3" className="text-center">
                    No courses available.
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

export default AdminCourses;
