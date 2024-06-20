import express from "express";
import { addVideo,getVideo,updateVideo,deleteVideo, addView, trend, random, enrolled, getByTag, search } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";
const router=express.Router();
// CREATE A VIDEO
router.post("/", verifyToken, addVideo)
router.put("/:id", verifyToken, updateVideo)
router.delete("/:id", verifyToken, deleteVideo)
router.get("/find/:id", getVideo)
router.put("/view/:id", addView)
router.get("/trend", trend)
router.get("/random", random)
router.get("/enroll", verifyToken, enrolled)
router.get("/tags", getByTag)
router.get("/search", search)
export default router;
