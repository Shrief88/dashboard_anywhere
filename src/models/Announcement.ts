import mongoose, { Schema, Document } from "mongoose";
import { IInstructor } from "./Instructor";

export interface IAnnouncement extends Document {
  content: string;
  user: mongoose.Types.ObjectId | IInstructor["_id"];
}

const AnnouncementSchema: Schema = new Schema({
  content: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "Instructor", required: true },
});


AnnouncementSchema.virtual("url").get(function(){
  return `/annuoncement/${this.id}`
})

export const AnnouncementModel = mongoose.model<IAnnouncement>(
  "Annuoncement",
  AnnouncementSchema
);
