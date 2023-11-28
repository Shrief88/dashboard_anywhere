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