import express from "express"
import * as announcementController from "../controllers/announcement"

const announcementRouter = express.Router();

announcementRouter.get("/", announcementController.announcement_list);

announcementRouter.get("/:id", announcementController.announcement_detail);

announcementRouter.post("/create", announcementController.announcement_create);

announcementRouter.delete("/:id/delete", announcementController.announcement_delete);

announcementRouter.put("/:id/update", announcementController.announcement_update);

export default announcementRouter;
