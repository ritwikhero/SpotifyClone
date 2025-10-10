import { Router } from "express";
import {
  createSong,
  deleteSong,
  createAlbum,
  deleteAlbum,
  checkAdmin,
} from "../controllers/admin.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();
//slight optimization for clean code
router.use(protectRoute, requireAdmin);

//check if user is admin
router.get("/check", checkAdmin);
//songs
router.post("/songs", createSong);
router.delete("/songs/:id", deleteSong);
//albums
router.post("/albums", createAlbum);
router.delete("/albums/:id", deleteAlbum);

export default router;
