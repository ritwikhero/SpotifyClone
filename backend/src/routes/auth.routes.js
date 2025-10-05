import { Router } from "express";

const router = Router();

router.get("/callback", async (req, res) => {
  console.log("auth from GET method");
});

export default router;
