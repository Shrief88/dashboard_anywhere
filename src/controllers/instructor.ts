import { InstructorModel } from "../models/Instructor";
import asyncHandler from "express-async-handler";


export const instructor_list = asyncHandler(async (req, res) => {
  try {
    const instructorData = await InstructorModel.find({});
    res.status(200).json({ data: instructorData });
  } catch (error) {
    console.error("Error retrieving instructors:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


export const instructor_detail = asyncHandler(async (req, res) => {
  try {
    const instructor = await InstructorModel.findById(req.params.id);
    if (instructor) {
      res.status(200).json({ data: instructor });
    } else {
      res.status(404).send({ error: "Instructor not found" });
    }
  } catch (error) {
    console.error("Error retrieving instructor details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


export const instructor_create = asyncHandler(async (req, res) => {
  try{
    const newInstructor = InstructorModel.create({
      first_name: req.body.first_name,
      family_name: req.body.family_name,
      position: req.body.position,
      Gender: req.body.Gender,
      photoUrl: req.body.photoUrl
    })
    await (await newInstructor).save();
    res.status(200).json({ data: newInstructor });
  }catch(error){
    console.error("Error creating new instructor:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export const instructor_delete = asyncHandler(async (req, res) => {
  try {
    const deletedInstructor = await InstructorModel.findByIdAndDelete(req.params.id);
    if (deletedInstructor) {
      res.status(200).json({ data: deletedInstructor });
    } else {
      res.status(404).send({ error: "instructor not found" });
    }
  } catch (error) {
    console.error("Error deleting instructor:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Handle instructor update
export const instructor_update = asyncHandler(async (req, res) => {
  const field = req.body.field;
  const value = req.body.value;
  const updatedField = {
    [field]: value,
  };
  try {
    const instructor = await InstructorModel.findByIdAndUpdate(req.params.id, updatedField);
    if (instructor) {
      res.status(200).json({ data: instructor });
    } else {
      res.status(404).send({ error: "Quiz not found" });
    }
  } catch (err) {
    console.error("Error updating quiz:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});