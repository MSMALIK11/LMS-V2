import express from "express";
import {
  addLesson,
  addNewCourse,
  deleteLessons,
  demo,
  getAdminAllCourse,
  getAllCourse,
  getSingleCourse,
} from "../controller/courseController.js";
import {
  signup,
  userLogin,
  userLogout,
  currentUser,
  resetUserPassword,
} from "../controller/usercontroller.js";
import { isAuthenticated } from "../middleware/index.js";

const router = express.Router();

router.route("/signup").post(signup).get(userLogin);
router.route("/login").post(userLogin);
router.route("/logout").get(userLogout);
router.route("/profile").get(isAuthenticated, currentUser);

// course route

router.route("/course/add").post(isAuthenticated, addNewCourse);
router.route("/course/single/:slug").get(getSingleCourse);
router.route("/course").get(getAllCourse);
router.route("/reset").post(isAuthenticated, resetUserPassword);
// ADMIN ROUTE
router.route("/admin/course").get(isAuthenticated, getAdminAllCourse);
router.route("/course/lesson/add/:id").post(isAuthenticated, addLesson);
// dcelete lessons
router
  .route("/course/lesson/:id/:lessonId")
  .delete(isAuthenticated, deleteLessons);
router.route("/demo").post(demo);

export default router;
