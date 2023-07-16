import {
  register,
  login,
  updateUser,
  getCurrentUser,
  logout,
} from "../controller/authController.js";
import testUser from "../middleware/testUser.js";
import express from "express";
import authenticateUser from "../middleware/auth.js";
import rateLimiter from "express-rate-limit";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message:
    "Too many requests from this IP address, olease try again after 15 minutes",
});

const router = express.Router();

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
router.route("/updateUser").patch(authenticateUser, testUser, updateUser);
router.route("/getCurrentUser").get(authenticateUser, getCurrentUser);
router.get("/logout", logout);

export default router;
