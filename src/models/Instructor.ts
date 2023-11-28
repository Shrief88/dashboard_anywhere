import mongoose, { Schema, Document } from "mongoose";

export interface IInstructor extends Document {
  name: string;
  position: string;
  photoUrl: string;
}

const instructorSchema: Schema = new Schema({
  name: { type: String, required: true },
  position: { type: String, required: true, unique: true },
  photoUrl: { type: String, required: true },
});

instructorSchema.virtual("url").get(function(){
  return `/instructor/${this.id}`
})

export const InstructorModel = mongoose.model<IInstructor>(
  "Instructor",
  instructorSchema
);
