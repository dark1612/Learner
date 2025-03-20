import { Outlet, useLocation } from "react-router-dom";
import StudentViewCommonHeader from "./header";

function StudentViewCommonLayout() {
  const location = useLocation();

  return (
    <div>
      {/* Always show the header unless on "course-progress" */}
      {!location.pathname.includes("course-progress") && (
        <StudentViewCommonHeader />
      )}
      <Outlet />
    </div>
  );
}

export default StudentViewCommonLayout;
