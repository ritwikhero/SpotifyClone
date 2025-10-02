import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("admin from GET method");
});

export default router;
