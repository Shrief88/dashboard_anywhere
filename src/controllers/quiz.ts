import { QuizModel } from "../models/Quiz";
import asyncHandler from "express-async-handler";

// Display list of Quizzes
export const quiz_list = asyncHandler(async (req, res) => {
  try {
    const quizData = await QuizModel.find({});
    res.status(200).json({ data: quizData });
  } catch (error) {
    console.error("Error retrieving quizzes:", error);
    res
      .status(500)
      .json({ error: "Internal server error" });
  }
});

// Display data for one Quiz
export const quiz_detail = asyncHandler(async (req, res) => {
  try {
    const quiz = await QuizModel.findById(req.params.id);
    if (quiz) {
      res.status(200).json({ data: quiz });
    } else {
      res.status(404).send({ error: "Quiz not found" });
    }
  } catch (error) {
    console.error("Error retrieving quiz details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Handle quiz create
export const quiz_create = asyncHandler(async (req, res) => {
  try {
    const newQuiz = QuizModel.create({
      title: req.body.title,
      course: req.body.course,
      topic: req.body.topic,
      due_to_day: req.body.due_to_day,
      due_to_hour: req.body.due_to_hour,
    });
    await (await newQuiz).save();
    res.status(200).json({ data: newQuiz });
  } catch (error) {
    console.error("Error creating new Quiz:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Handle quiz delete
export const quiz_delete = asyncHandler(async (req, res) => {
  try {
    const deletedQuiz = await QuizModel.findByIdAndDelete(req.params.id);
    if (deletedQuiz) {
      res.status(200).json({ data: deletedQuiz });
    } else {
      res.status(404).send({ error: "Quiz not found" });
    }
  } catch (error) {
    console.error("Error deleting quiz:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Handle quiz update
export const quiz_update = asyncHandler(async (req, res) => {
  const field = req.body.field;
  const value = req.body.value;
  const updatedField = {
    [field]: value,
  };
  try {
    const quiz = await QuizModel.findByIdAndUpdate(req.params.id, updatedField);
    if (quiz) {
      res.status(200).json({ data: quiz });
    } else {
      res.status(404).send({ error: "Quiz not found" });
    }
  } catch (err) {
    console.error("Error updating quiz:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});
