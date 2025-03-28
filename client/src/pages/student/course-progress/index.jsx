import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VideoPlayer from "@/components/video-player";
import { StudentContext } from "@/context/student-context";
import {
  getCurrentCourseProgressService,
  markLectureAsViewedService,
  resetCourseProgressService,
} from "@/services";
import { Check, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useNavigate, useParams } from "react-router-dom";

function StudentViewCourseProgressPage() {
  const navigate = useNavigate();
  const { studentCurrentCourseProgress, setStudentCurrentCourseProgress } =
    useContext(StudentContext);
  const [currentLecture, setCurrentLecture] = useState(null);
  const [showCourseCompleteDialog, setShowCourseCompleteDialog] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const { id } = useParams();

  async function fetchCurrentCourseProgress() {
    const response = await getCurrentCourseProgressService(id);
    if (response?.success) {
      setStudentCurrentCourseProgress({
        courseDetails: response?.data?.courseDetails,
        progress: response?.data?.progress,
      });

      if (response?.data?.completed) {
        setCurrentLecture(response?.data?.courseDetails?.curriculum[0]);
        setShowCourseCompleteDialog(true);
        setShowConfetti(true);
        return;
      }

      if (response?.data?.progress?.length === 0) {
        setCurrentLecture(response?.data?.courseDetails?.curriculum[0]);
      } else {
        const lastIndexOfViewedAsTrue = response?.data?.progress.reduceRight(
          (acc, obj, index) => (acc === -1 && obj.viewed ? index : acc),
          -1
        );
        setCurrentLecture(
          response?.data?.courseDetails?.curriculum[lastIndexOfViewedAsTrue + 1]
        );
      }
    }
  }

  async function updateCourseProgress() {
    if (currentLecture) {
      const response = await markLectureAsViewedService(
        studentCurrentCourseProgress?.courseDetails?._id,
        currentLecture._id
      );
      if (response?.success) {
        fetchCurrentCourseProgress();
      }
    }
  }

  async function handleRewatchCourse() {
    const response = await resetCourseProgressService(
      studentCurrentCourseProgress?.courseDetails?._id
    );

    if (response?.success) {
      setCurrentLecture(null);
      setShowConfetti(false);
      setShowCourseCompleteDialog(false);
      fetchCurrentCourseProgress();
    }
  }

  useEffect(() => {
    fetchCurrentCourseProgress();
  }, [id]);

  useEffect(() => {
    if (currentLecture?.progressValue === 1) updateCourseProgress();
  }, [currentLecture]);

  useEffect(() => {
    if (showConfetti) setTimeout(() => setShowConfetti(false), 15000);
  }, [showConfetti]);

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <div className="flex items-center justify-between p-6 bg-black border-b border-b-emerald-50">
        <div className="flex items-center space-x-6">
          <Button
            onClick={() => navigate("/home")}
            className="text-white"
            variant="ghost"
            size="sm"
          >
            <ChevronLeft className="h-5 w-5 mr-2" />
            Back to Home Page
          </Button>
          <h1 className="text-lg font-semibold hidden md:block">
            {studentCurrentCourseProgress?.courseDetails?.title}
          </h1>
        </div>
        <Button onClick={() => setIsSideBarOpen(!isSideBarOpen)} className="text-white">
          {isSideBarOpen ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </Button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div
          className={`flex-1 ${isSideBarOpen ? "mr-[350px]" : ""} transition-all duration-300`}
        >
          <VideoPlayer
            width="100%"
            height="500px"
            url={currentLecture?.videoUrl}
            onProgressUpdate={setCurrentLecture}
            progressData={currentLecture}
          />
          <div className="p-6 bg-black">
            <h2 className="text-2xl font-semibold mb-4">{currentLecture?.title}</h2>
          </div>
        </div>

        <div
          className={`fixed top-[64px] right-0 bottom-0 w-[350px] bg-black border-l border-gray-700 transition-all duration-300 ${
            isSideBarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Tabs defaultValue="content" className="h-auto flex flex-col">
            <TabsList className="grid bg-black w-full grid-cols-2 p-0 h-14">
              <TabsTrigger value="content" className="text-white rounded-none h-full">
                Course Content
              </TabsTrigger>
              <TabsTrigger value="overview" className="text-white rounded-none h-full">
                Overview
              </TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="flex-1 overflow-hidden">
              <ScrollArea className="h-full">
                <div className="p-6 space-y-6">
                  {studentCurrentCourseProgress?.courseDetails?.curriculum.map((item, index) => (
                    <div
                      className="course-item flex items-center space-x-3 text-sm text-white font-medium cursor-pointer hover:bg-gray-700 hover:scale-105 transition-all"
                      key={item._id || index}
                    >
                      {studentCurrentCourseProgress?.progress?.find(
                        (progressItem) => progressItem.lectureId === item._id
                      )?.viewed ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <Play className="h-5 w-5" />
                      )}
                      <span>{item?.title}</span>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="overview" className="flex-1 overflow-hidden">
              <ScrollArea className="h-full">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">About this course</h2>
                  <p className="text-gray-400">
                    {studentCurrentCourseProgress?.courseDetails?.description}
                  </p>
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Dialog open={showCourseCompleteDialog}>
        <DialogContent className="course-complete-modal sm:w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-white">Course Completed!</DialogTitle>
            <DialogDescription className="flex flex-col gap-4 text-white">
              <Label className="text-gray-300">You have completed the course</Label>
              <div className="flex flex-row gap-4">
                <Button onClick={() => navigate("/courses")} className="text-black">
                  Explore More Courses!
                </Button>
                <Button onClick={handleRewatchCourse} className="text-black">
                  Rewatch Course
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default StudentViewCourseProgressPage;
