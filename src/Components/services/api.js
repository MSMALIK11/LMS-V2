import axios from "axios";
const hostname = "http://localhost:8000";

const config = {
  headers: {
    authorization: JSON.parse(localStorage.getItem("user")),
  },
};

console.log(config);

// ===========================================================
// =============GET ALL COURSE API ===========================
export const fetchAllCourse = async () => {
  const res = await axios.get(`${hostname}/api/course`);
  console.log(res);
  return res.data.course;
};
// ===========================================================
// =============GET SINGLE  COURSE API ===========================
export const fetchSingleCourse = async (title) => {
  const res = await axios.get(`${hostname}/api/course/single/${title}`);
  console.log(res.data.course);
  return res.data.course;
};

// ===========================================================
// =============SIGNUP API===================================
export const signupUser = async (val, data) => {
  const res = await axios.post(`${hostname}/api/${val}`, data);

  return res;
};

// ===========================================================
// =============LOGOUT  API===================================

export const logoutUser = async () => {
  const res = await axios.get(`${hostname}/api/logout`);

  return res.data;
};

// ===========================================================
// =============GET ALL ADMIN COURSE===================================

export const fetchAllAdminCourse = async () => {
  const res = await axios.get(`${hostname}/api/admin/course`, config);

  return res.data;
};
