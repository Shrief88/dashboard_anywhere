import express from "express"
import * as announcementController from "../controllers/announcement"

const announcementRouter = express.Router();

announcementRouter.get("/", announcementController.announcement_list);

announcementRouter.get("/:id", announcementController.announcement_detail);


export default announcementRouter;
