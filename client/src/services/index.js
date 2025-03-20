import axiosInstance from "@/api/axiosInstance";

import axios from 'axios';
const BASE_URL = 'http://localhost:5000';
export async function mediaUploadService(formData, onProgressCallback) {
  const { data } = await axiosInstance.post("/media/upload", formData, {
    onUploadProgress: (progressEvent) => {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      onProgressCallback(percentCompleted);
    },
  });

  return data;
}

export async function mediaDeleteService(id) {
  const { data } = await axiosInstance.delete(`/media/delete/${id}`);

  return data;
}

export async function fetchInstructorCourseListService() {
  const { data } = await axiosInstance.get(`/instructor/course/get`);

  return data;
}

export async function addNewCourseService(formData) {
  const { data } = await axiosInstance.post(`/instructor/course/add`, formData);

  return data;
}

export async function fetchInstructorCourseDetailsService(id) {
  const { data } = await axiosInstance.get(
    `/instructor/course/get/details/${id}`
  );

  return data;
}

export async function updateCourseByIdService(id, formData) {
  const { data } = await axiosInstance.put(
    `/instructor/course/update/${id}`,
    formData
  );

  return data;
}

export async function mediaBulkUploadService(formData, onProgressCallback) {
  const { data } = await axiosInstance.post("/media/bulk-upload", formData, {
    onUploadProgress: (progressEvent) => {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      onProgressCallback(percentCompleted);
    },
  });

  return data;
}

export async function deleteCourseByIdService(id) {
  try {
    const { data } = await axiosInstance.delete(`/instructor/course/delete/${id}`);
    return data;
  } catch (error) {
    console.error("Error deleting course:", error);
    throw error;
  }
}


export async function fetchStudentViewCourseListService(query) {
  const { data } = await axiosInstance.get(`/student/course/get?${query}`);

  return data;
}


// export async function fetchStudentViewCourseListService(query) {
//   const { data } = await axiosInstance.get(`/student/course/get?${query}`);

//   return data;
// }

// export async function fetchStudentViewCourseDetailsService(courseId) {
//   const { data } = await axiosInstance.get(
//     `/student/course/get/details/${courseId}`
//   );

//   return data;
// }
export async function fetchStudentViewCourseDetailsService(courseId) {
  const { data } = await axiosInstance.get
  (`/student/course/get/details/${courseId}`);

  return data;
}


// Updated fetch service without userId
export async function fetchStudentBoughtCoursesService() {
  const { data } = await axiosInstance.get("/student/courses-bought/get");
  return data;
}



export async function getCurrentCourseProgressService(courseId) {
  // Fetch progress for a specific course
  const { data } = await axiosInstance.get(
    `/student/course-progress/get/${courseId}`
  );
  return data;
}

export async function markLectureAsViewedService(courseId, lectureId) {
  // Mark a specific lecture as viewed
  const { data } = await axiosInstance.post(
    `/student/course-progress/mark-lecture-viewed`,
    {
      courseId,
      lectureId,
    }
  );
  return data;
}

export async function resetCourseProgressService(courseId) {
  // Reset progress for a specific course
  const { data } = await axiosInstance.post(
    `/student/course-progress/reset-progress`,
    {
      courseId,
    }
  );
  return data;
}
