import express from "express";
import testUser from "../middleware/testUser.js";
import {
  getJobs,
  deleteJob,
  updateJobs,
  showStats,
  createJob,
} from "../controller/jobsController.js";

const router = express.Router();

router.route("/").post(testUser, createJob).get(getJobs);
router.route("/stats").get(showStats);
router.route("/:id").delete(testUser, deleteJob).patch(testUser, updateJobs);

export default router;
