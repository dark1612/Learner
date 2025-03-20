import { Route, Routes } from "react-router-dom";
import AdminDashboardPage from "./pages/instructor";
import AddNewCoursePage from "./pages/instructor/add-new-course";
import StudentHomePage from "./pages/student/home";
import StudentViewCommonLayout from "./components/student-view/common-layout";
import StudentViewCoursesPage from "./pages/student/courses";
import StudentViewCourseDetailsPage from "./pages/student/course-details";


import StudentViewCourseProgressPage from "./pages/student/course-progress";
import StudentCoursesPage from "./pages/student/student-courses";

function App() {
  return (
    <Routes>
      {/* Instructor Routes */}
      <Route path="/instructor" element={<AdminDashboardPage />} />
      <Route path="/instructor/create-new-course" element={<AddNewCoursePage />} />
      <Route path="/instructor/edit-course/:courseId" element={<AddNewCoursePage />} />

      {/* Student Routes */}
      <Route path="/" element={<StudentViewCommonLayout />}>
        <Route path="home" element={<StudentHomePage />} />
        <Route path="courses" element={<StudentViewCoursesPage />} />
        <Route path="course/details/:id" element={<StudentViewCourseDetailsPage/>} />
        <Route path="student-courses" element={<StudentCoursesPage />}/>
        <Route path="course-progress/:id" element={<StudentViewCourseProgressPage />}/>
        

      </Route>
    </Routes>
  );
}

export default App;
