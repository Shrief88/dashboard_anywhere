#!/usr/bin/env node

console.log(
  'This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://your_username:your_password@cluster0.lz91hw2.mongodb.net/your_db_name?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs: string[] = process.argv.slice(2);

import mongoose from "mongoose";
import { QuizModel } from "./src/models/Quiz";
import { InstructorModel } from "./src/models/Instructor";
import { AnnouncementModel } from "./src/models/Announcement";

const mongodb = userArgs[0];

const main = async () => {
  try {
    console.log("Debug: About to connect");
    await mongoose.connect(mongodb);
    console.log("Debug: Should be connected?");
    await createQuizzes();
    await createInstructors();
    await createAnnouncements();
    console.log("Debug: Closing mongoose");
    await mongoose.connection.close();
  } catch (e) {
    console.log(e);
  }
};

main();

const quizCreate = async (
  title: string,
  course: string,
  topic: string,
  due_to_day: Date,
  due_to_hour: number
) => {
  const newQuiz = QuizModel.create({
    title,
    course,
    topic,
    due_to_day,
    due_to_hour,
  });
  await (await newQuiz).save();
};

const instructorCreate = async (
  id: number,
  first_name: string,
  family_name: string,
  position: string,
  photoUrl: string,
  Gender: string
) => {
  const newInstructor = InstructorModel.create({
    id,
    first_name,
    family_name,
    position,
    photoUrl,
    Gender,
  });
  await (await newInstructor).save();
};

const announcementCreate = async (content: string, instructor_id: number) => {
  const newAnnuoncement = AnnouncementModel.create({
    content,
    instructor: instructor_id,
  });
  await (await newAnnuoncement).save();
};

const createAnnouncements = async () => {
  await Promise.all([
    announcementCreate(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut tellus faucibus leo tempor imperdiet mollis vel odio. Phasellus mattis neque nec enim ullamcorper, nec rutrum nisi accumsan. Cras vel massa massa.",
      (
        await InstructorModel.findOne({ id: 1 })
      )?._id
    ),
    announcementCreate(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut tellus faucibus leo tempor imperdiet mollis vel odio. Phasellus mattis neque nec enim ullamcorper, nec rutrum nisi accumsan. Cras vel massa massa.",
      (
        await InstructorModel.findOne({ id: 2 })
      )?._id
    ),
    announcementCreate(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut tellus faucibus leo tempor imperdiet mollis vel odio. Phasellus mattis neque nec enim ullamcorper, nec rutrum nisi accumsan. Cras vel massa massa.",
      (
        await InstructorModel.findOne({ id: 3 })
      )?._id
    ),
  ]);
};

const createQuizzes = async () => {
  await Promise.all([
    quizCreate(
      "Unit 2 quiz",
      "Physics 02",
      "Unit2: Motion and forces",
      new Date(2017, 11, 21),
      21
    ),
    quizCreate(
      "12-12 Assignment",
      "Arabic H12",
      "الوحدة الثانية - الافعال",
      new Date(2017, 11, 21),
      21
    ),
  ]);
};

const createInstructors = async () => {
  await Promise.all([
    instructorCreate(
      1,
      "Ahmed",
      "Mustafa",
      "Math 101",
      "/images/2.jpeg",
      "male"
    ),
    instructorCreate(
      2,
      "Salma",
      "Ahmed",
      "Physics 02",
      "/images/1.png",
      "female"
    ),
    instructorCreate(
      3,
      "Emad",
      "Mustafa",
      "event Manger",
      "/images/3.jpg",
      "male"
    ),
  ]);
};
