import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import AuthProvider from "./context/auth-context/index.jsx";
import InstructorProvider from "./context/instructor-context/index.jsx";
import StudentProvider from "./context/student-context/index.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
=======

import InstructorProvider from "./context/instructor-context/index.jsx";
import StudentProvider from "./context/student-context/index.jsx";
// import StudentProvider from "./context/student-context/index.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
      <InstructorProvider>
        <StudentProvider>
          <App />
        </StudentProvider>
      </InstructorProvider>
<<<<<<< HEAD
    </AuthProvider>
  </BrowserRouter>
);
=======
   
  </BrowserRouter>
);
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
