import express from "express";
import * as instructorController from "../controllers/instructor";

const instructorRouter = express.Router();

instructorRouter.get("/", instructorController.instructor_list);

instructorRouter.get("/:id", instructorController.instructor_detail);

instructorRouter.post("/create", instructorController.instructor_create);


export default instructorRouter