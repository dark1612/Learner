import axiosInstance from "@/api/axiosInstance";

<<<<<<< HEAD

export async function registerService(formData) {
  const { data } = await axiosInstance.post("/auth/register", {
    ...formData,
    role: "user",
  });

  return data;
}

export async function loginService(formData) {
  const { data } = await axiosInstance.post("/auth/login", formData);

  return data;
}

export async function checkAuthService() {
  const { data } = await axiosInstance.get("/auth/check-auth");

  return data;
}

=======
import axios from 'axios';
const BASE_URL = 'http://localhost:5000';
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
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
<<<<<<< HEAD
export const deleteCourseByIdService = async (courseId) => {
  try {
    // Updated URL to match your actual backend route
    const response = await axiosInstance.delete(`/instructor/course/${courseId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting course:", error);
    return {
      success: false,
      message: "Failed to delete course.",
    };
  }
};
=======

>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
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

<<<<<<< HEAD
=======
export async function deleteCourseByIdService(id) {
  try {
    const { data } = await axiosInstance.delete(`/instructor/course/delete/${id}`);
    return data;
  } catch (error) {
    console.error("Error deleting course:", error);
    throw error;
  }
}


>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
export async function fetchStudentViewCourseListService(query) {
  const { data } = await axiosInstance.get(`/student/course/get?${query}`);

  return data;
}

<<<<<<< HEAD
export async function fetchStudentViewCourseDetailsService(courseId) {
  const { data } = await axiosInstance.get(
    `/student/course/get/details/${courseId}`
  );

  return data;
}

export async function checkCoursePurchaseInfoService(courseId, studentId) {
  const { data } = await axiosInstance.get(
    `/student/course/purchase-info/${courseId}/${studentId}`
  );

  return data;
}

export async function createPaymentService(formData) {
  const { data } = await axiosInstance.post(`/student/order/create`, formData);

  return data;
}

export async function captureAndFinalizePaymentService(
  paymentId,
  payerId,
  orderId
) {
  const { data } = await axiosInstance.post(`/student/order/capture`, {
    paymentId,
    payerId,
    orderId,
  });

  return data;
}

export async function fetchStudentBoughtCoursesService(studentId) {
  const { data } = await axiosInstance.get(
    `/student/courses-bought/get/${studentId}`
  );

  return data;
}

export async function getCurrentCourseProgressService(userId, courseId) {
  const { data } = await axiosInstance.get(
    `/student/course-progress/get/${userId}/${courseId}`
  );

  return data;
}

export async function markLectureAsViewedService(userId, courseId, lectureId) {
  const { data } = await axiosInstance.post(
    `/student/course-progress/mark-lecture-viewed`,
    {
      userId,
=======

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
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
      courseId,
      lectureId,
    }
  );
<<<<<<< HEAD

  return data;
}

export async function resetCourseProgressService(userId, courseId) {
  const { data } = await axiosInstance.post(
    `/student/course-progress/reset-progress`,
    {
      userId,
      courseId,
    }
  );

=======
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
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
  return data;
}
