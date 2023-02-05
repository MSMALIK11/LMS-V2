import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import { useNavigate, Route, Routes } from "react-router-dom";
import AppTopBar from "./Components/AppTopBar";
import Signup from "./Components/registration/Signup";

import CourseDetails from "./pages/CourseDetails";
import LecturesSessions from "./pages/Sessions/LecturesSessions";

function App() {
  const [user, setUser] = useState([]);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const res = JSON.parse(localStorage.getItem("user"));
    console.log("user data", res);

    if (res) {
      setLogin(true);
      setUser(res);
    } else {
      navigate("/signup");
      setLogin(false);
    }
  }, [login, user?.success]);

  return (
    <div className="App">
      <AppTopBar login={login} />
      <Routes>
        <Route path="/" element={login && <HomePage />} />
        <Route
          path="/course-details/:title"
          element={login && <CourseDetails />}
        />
        <Route
          path="/course/session/:title/:slug"
          element={<LecturesSessions />}
        />

        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
