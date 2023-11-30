import mongoose, { Schema, Document } from "mongoose";

export interface IInstructor extends Document {
  id: number;
  first_name: string;
  family_name: string;
  position: string;
  photoUrl: string;
  Gender: string;
}

const instructorSchema: Schema = new Schema({
  id: { type: Number, require: true, unique: true },
  first_name: { type: String, required: true },
  family_name: { type: String, required: true },
  position: { type: String, required: true, unique: true },
  photoUrl: { type: String, required: true },
  Gender: { type: String, required: true },
});

export const InstructorModel = mongoose.model<IInstructor>(
  "Instructor",
  instructorSchema
);
