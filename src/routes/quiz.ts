import express from "express";
import * as quizController from "../controllers/quiz";

const quizRouter = express.Router();

quizRouter.get("/", quizController.quiz_list);

quizRouter.get("/:id", quizController.quiz_detail);

quizRouter.post("/create", quizController.quiz_create);

// quizRouter.delete("/:id/delete", quizController.quiz_delete_get);

// quizRouter.post("/:id/delete", quizController.quiz_delete_post);

// quizRouter.get("/:id/update", quizController.quiz_update_get);

// quizRouter.post("/:id/update", quizController.quiz_update_post);

export default quizRouter;
