import { createContext, useState } from "react";

export const StudentContext = createContext(null);

export default function StudentProvider({ children }) {
<<<<<<< HEAD
  const [studentViewCoursesList, setStudentViewCoursesList] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [studentViewCourseDetails, setStudentViewCourseDetails] =
    useState(null);
  const [currentCourseDetailsId, setCurrentCourseDetailsId] = useState(null);
  const [studentBoughtCoursesList, setStudentBoughtCoursesList] = useState([]);
  const [studentCurrentCourseProgress, setStudentCurrentCourseProgress] =
    useState({});

  return (
    <StudentContext.Provider
      value={{
        studentViewCoursesList,
        setStudentViewCoursesList,
        loadingState,
        setLoadingState,
        studentViewCourseDetails,
        setStudentViewCourseDetails,
        currentCourseDetailsId,
        setCurrentCourseDetailsId,
        studentBoughtCoursesList,
        setStudentBoughtCoursesList,
        studentCurrentCourseProgress,
        setStudentCurrentCourseProgress,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}
=======
    const [studentViewCoursesList, setStudentViewCoursesList] = useState([]);
     const [loadingState,setLoadingState]=useState(true);
     const [studentViewCourseDetails,setStudentViewCourseDetails]=useState(null);
     const [currentCourseDetailsId,setCurrentCourseDetailsId]=useState(null);
     const[studentCoursesWithProgress, setStudentCoursesWithProgress]=useState([]);
     const [ studentCurrentCourseProgress, setStudentCurrentCourseProgress ] =useState({});
    return (
        <StudentContext.Provider
          value={{
            studentViewCoursesList,
            setStudentViewCoursesList,
            loadingState,
            setLoadingState,
            studentViewCourseDetails,
            setStudentViewCourseDetails,
            currentCourseDetailsId,
            setCurrentCourseDetailsId,
            studentCoursesWithProgress, 
            setStudentCoursesWithProgress,
            studentCurrentCourseProgress, 
            setStudentCurrentCourseProgress



        }}
        >
          {children}
        </StudentContext.Provider>
      );
    }
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
