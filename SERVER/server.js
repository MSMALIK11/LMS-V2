import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });
const app = express();
import cors from "cors";

import cookieParser from "cookie-parser";
import csrf from "csurf";
// handle image data
import expressFileupload from "express-fileupload";

import { connection } from "./DATABABSE/db.js";
import router from "./routes/route.js";
// handle cross-origin-request

// app.use(
//   cors({
//     origin:true,
//     credentials: true,
//   })
// );
app.use(cors());
app.use(express.json());
app.use(expressFileupload({ useTempFiles: true }));
app.use(cookieParser());

// const csrfprotection=csrf({cookie:true})

const PORT = process.env.PORT;
// app.use(csrfprotection)
app.use("/api", router);

// app.get("/api/csrf-token",(req,res)=>{
//   return res.status(200).json({csrfToken:req.csrfToken()})
// })
app.listen(PORT, () => {
  console.log(`server is running at port 8000`);
});

connection();
