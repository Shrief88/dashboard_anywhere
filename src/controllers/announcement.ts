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


export const announcement_create = asyncHandler(async (req, res) => {
  try{
    const newAnnouncement = AnnouncementModel.create({
      title: req.body.title,
      instructor: req.body.description
    })
    await (await newAnnouncement).save();
    res.status(200).json({ data: newAnnouncement });
  }catch(error){
    console.error("Error creating new announcement:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export const announcement_delete = asyncHandler(async (req, res) => {
  try {
    const deletedAnnouncement = await AnnouncementModel.findByIdAndDelete(req.params.id);
    if (deletedAnnouncement) {
      res.status(200).json({ data: deletedAnnouncement });
    } else {
      res.status(404).send({ error: "Announcement not found" });
    }
  } catch (error) {
    console.error("Error deleting announcement:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export const announcement_update = asyncHandler(async (req, res) => {
  const field = req.body.field;
  const value = req.body.value;
  const updatedField = {
    [field]: value,
  };
  try {
    const updatedAnnouncement = await AnnouncementModel.findByIdAndUpdate(req.params.id, updatedField);
    if (updatedAnnouncement) {
      res.status(200).json({ data: updatedAnnouncement });
    } else {
      res.status(404).send({ error: "Announcement not found" });
    }
  } catch (error) {
    console.error("Error updating announcement:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
