import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import VideoPlayer from "@/components/video-player";
import { StudentContext } from "@/context/student-context";
import { fetchStudentViewCourseDetailsService } from "@/services";
import { CheckCircle, Globe, PlayCircle, FileText } from "lucide-react"; // Added FileText for lecture icon
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function StudentViewCourseDetailsPage() {
  const {
    studentViewCourseDetails,
    setStudentViewCourseDetails,
    currentCourseDetailsId,
    setCurrentCourseDetailsId,
    loadingState,
    setLoadingState,
  } = useContext(StudentContext);

  const [displayCurrentVideo, setDisplayCurrentVideo] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  async function fetchStudentViewCourseDetails() {
    const response = await fetchStudentViewCourseDetailsService(currentCourseDetailsId);
    if (response?.success) {
      setStudentViewCourseDetails(response?.data);
      setLoadingState(false);
    } else {
      setStudentViewCourseDetails(null);
      setLoadingState(false);
    }
  }

  useEffect(() => {
    if (id) setCurrentCourseDetailsId(id);
  }, [id]);

  useEffect(() => {
    if (currentCourseDetailsId !== null) fetchStudentViewCourseDetails();
  }, [currentCourseDetailsId]);

  if (loadingState) return <Skeleton />;

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Course Overview Section */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h1 className="text-3xl font-bold text-black mb-4">{studentViewCourseDetails?.title}</h1>
        <p className="text-lg text-gray-600 mb-6">{studentViewCourseDetails?.subtitle}</p>
        <div className="flex items-center space-x-6 text-sm text-gray-500">
          <span>Created On {studentViewCourseDetails?.date.split("T")[0]}</span>
          <span className="flex items-center">
            <Globe className="mr-2 h-5 w-5" />
            {studentViewCourseDetails?.primaryLanguage}
          </span>
          <span>
  {studentViewCourseDetails?.students?.length
    ? `${studentViewCourseDetails.students.length} ${studentViewCourseDetails.students.length <= 1 ? "Student" : "Students"}`
    : "No students enrolled"}
</span>

        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section: Course Details */}
        <main className="flex-grow">
          <div className="space-y-8">
            <Card className="p-6 bg-white border border-gray-300 shadow-md rounded-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-black">What You'll Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {studentViewCourseDetails?.objectives.split(",").map((objective, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white border border-gray-300 shadow-md rounded-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-black">Course Description</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">{studentViewCourseDetails?.description}</CardContent>
            </Card>

            <Card className="p-6 bg-white border border-gray-300 shadow-md rounded-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-black">Course Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentViewCourseDetails?.curriculum?.map((curriculumItem, index) => (
                    <div key={index} className="flex items-center text-black">
                      {/* Added a lecture icon */}
                      <FileText className="mr-4 h-5 w-5 text-gray-600" />
                      <span>{curriculumItem?.title}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        {/* Right Section: Video and Call to Action */}
        <aside className="w-full md:w-[400px]">
          <Card className="sticky top-4 border border-gray-300 shadow-md rounded-lg p-6">
            <div className="aspect-video mb-6 rounded-lg overflow-hidden">
              <VideoPlayer
                url={studentViewCourseDetails?.curriculum?.[0]?.videoUrl || ""}
                width="100%"
                height="100%"
              />
            </div>
            <Button
              onClick={() => navigate(`/course-progress/${id}`)}
              className="w-full py-3 text-white bg-black hover:bg-gray-800 transition-all duration-300 rounded-lg"
            >
              Start Learning Today!
            </Button>
          </Card>
        </aside>
      </div>
    </div>
  );
}

export default StudentViewCourseDetailsPage;
