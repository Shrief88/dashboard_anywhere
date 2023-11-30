import express from "express";
import * as instructorController from "../controllers/instructor";

const instructorRouter = express.Router();

instructorRouter.get("/", instructorController.instructor_list);

instructorRouter.get("/:id", instructorController.instructor_detail);

instructorRouter.post("/create", instructorController.instructor_create);

instructorRouter.delete("/:id/delete", instructorController.instructor_delete);

instructorRouter.put("/:id/update", instructorController.instructor_update);

export default instructorRouter