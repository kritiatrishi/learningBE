import express from "express";
import { cancel, deleteUser, dislike, enroll, getUser, like, update } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";
const router=express.Router();
//update user
router.put("/:id",verifyToken,update)
//delete user
router.delete("/:id",verifyToken,deleteUser)
//get a user
router.get("/find/:id", getUser)
//enroll a user
router.put("/enroll/:id",verifyToken, enroll)
//cancel a user
router.put("/cancel/:id",verifyToken, cancel)
//like a video
router.put("/like/:videoId",verifyToken, like)
//dislike a video
router.put("/dislike/:videoId",verifyToken, dislike)
export default router;
