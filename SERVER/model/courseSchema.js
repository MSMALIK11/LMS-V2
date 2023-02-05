import mongoose from "mongoose";
import User from "./signupmodel.js";


const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    slug: {
      type: String,
      lowercase: true,
    },
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: User },
    image: {
      url: String,
      public_id: String,
    },
 
    lessons: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lesson",
      },
    ],
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
