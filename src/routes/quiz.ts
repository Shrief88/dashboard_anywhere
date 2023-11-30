import express from "express";
import * as quizController from "../controllers/quiz";

const quizRouter = express.Router();

quizRouter.get("/", quizController.quiz_list);

quizRouter.get("/:id", quizController.quiz_detail);

quizRouter.post("/create", quizController.quiz_create);

quizRouter.delete("/:id/delete", quizController.quiz_delete);

quizRouter.put("/:id/update", quizController.quiz_update);

export default quizRouter;
