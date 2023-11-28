import mongoose, { Schema, Document } from "mongoose";

export interface IQuiz extends Document {
  title: string;
  course: string;
  topic: string;
  due_to_day: Date;
  due_to_hour: number;
}

const QuizSchema: Schema = new Schema({
  title: { type: String, required: true },
  course: { type: String, required: true },
  topic: { type: String, required: true },
  due_to_day: { type: Date, required: true },
  due_to_hour: { type: Number, required: true },
});

QuizSchema.virtual("url").get(function () {
  return `/quiz/${this.id}`;
});

export const QuizModel = mongoose.model<IQuiz>("Quiz", QuizSchema);






