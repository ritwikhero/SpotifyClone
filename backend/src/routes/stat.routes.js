import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("stats from GET method");
});

export default router;
