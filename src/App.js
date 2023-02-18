import React, { useEffect, useState } from "react";
import "./App.css";
import "./AdminDashboard/Style/adminstyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import { useNavigate, Route, Routes, Navigate } from "react-router-dom";
import AppTopBar from "./Components/AppTopBar";
import Signup from "./Components/registration/Signup";

import CourseDetails from "./pages/CourseDetails";
import LecturesSessions from "./pages/Sessions/LecturesSessions";
import ProtectedRoute from "./pages/ProtectedRoute";

import AdminDashboard from "./AdminDashboard/AdminDashboard";
import AdminCourses from "./AdminDashboard/AdminCourses/AdminCourses";
import AddCourse from "./AdminDashboard/AddCourse/AddCourse";
import axios from "axios";
axios.defaults.withCredentials = true;
function App() {
  const [user, setUser] = useState([]);
  const [login, setLogin] = useState(true);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const res = JSON.parse(localStorage.getItem("token"));
  //   if (res) {
  //     console.log("rees", res);
  //     setLogin(res)
  //     setUser(res);
  //   }
  // }, [login, user]);

  return (
    <div className="App">
      <AppTopBar login={login} />
      <Routes>
        <Route path="/" element={<ProtectedRoute  />}>
          <Route path="/" element={<HomePage />} />
          <Route path="course-details/:title" element={<CourseDetails />} />
          <Route
            path="course/session/:title/:slug"
            element={<LecturesSessions />}
          />
        </Route>
        <Route />

        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="/admin" element={<Navigate replace to="course" />} />
          <Route path="course" element={<AdminCourses />} />
          <Route path="add-course" element={<AddCourse />} />
        </Route>

        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
