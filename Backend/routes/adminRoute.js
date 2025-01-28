import express from "express";
import {
  addDoctor,
  admindashboard,
  allDoctors,
  appointmentAdmin,
  AppointmentCancel,
  loginAdmin,
} from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";
import { changeAvailablity } from "../controllers/doctorController.js";

const adminRouter = express.Router();

adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
adminRouter.post("/login", loginAdmin);
adminRouter.post("/all-doctors", authAdmin, allDoctors);
adminRouter.post("/change-availabilty", authAdmin, changeAvailablity);
adminRouter.get("/appointments", authAdmin, appointmentAdmin);
adminRouter.post("/cancel-appointment", authAdmin, AppointmentCancel);
adminRouter.get("/dashboard", authAdmin, admindashboard);

export default adminRouter;
