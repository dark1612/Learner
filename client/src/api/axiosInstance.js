import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://learner-5.onrender.com", // ✅ wrapped in quotes
  withCredentials: true, // ✅ if you're using cookies/sessions
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = JSON.parse(sessionStorage.getItem("accessToken")) || "";

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (err) => Promise.reject(err)
);

export default axiosInstance;
