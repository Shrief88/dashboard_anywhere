import mongoose, { Schema, Document } from "mongoose";
import { IInstructor } from "./Instructor";

export interface IAnnouncement extends Document {
  content: string;
  instructor: mongoose.Types.ObjectId | IInstructor["_id"];
}

const AnnouncementSchema: Schema = new Schema({
  content: { type: String, required: true },
  instructor: {
    type: Schema.Types.ObjectId,
    ref: "Instructor",
    required: true,
  },
});

export const AnnouncementModel = mongoose.model<IAnnouncement>(
  "Annuoncement",
  AnnouncementSchema
);
