import { AnnouncementModel } from "../models/Announcement";
import asyncHandler from "express-async-handler";

export const announcement_list = asyncHandler(async (req, res) => {
  try {
    const announcementData = await AnnouncementModel.find({});
    res.status(200).json({ data: announcementData });
  } catch (error) {
    console.error("Error retrieving announcements:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export const announcement_detail = asyncHandler(async (req, res) => {
  try {
    const announcement = await AnnouncementModel.findById(req.params.id);
    if (announcement) {
      res.status(200).json({ data: announcement });
    } else {
      res.status(404).send({ error: "Announcement not found" });
    }
  } catch (error) {
    console.error("Error retrieving announcement details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});