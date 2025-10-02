import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("users from GET method");
});

export default router;
