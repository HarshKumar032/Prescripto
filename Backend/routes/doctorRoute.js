import express from "express";
import {
  appointmentCancel,
  appointmentComplete,
  appointmentsDoctor,
  doctorlist,
  loginDoctor,
} from "../controllers/doctorController.js";
import authDoctor from "../middlewares/authDoctor.js";

const doctorRouter = express.Router();

doctorRouter.get("/list", doctorlist);
doctorRouter.post("/login", loginDoctor);
doctorRouter.get("/appointments", authDoctor, appointmentsDoctor);
doctorRouter.post("/complete-appointment", authDoctor, appointmentComplete);
doctorRouter.post("/cancel-appointment", authDoctor, appointmentCancel);

export default doctorRouter;
