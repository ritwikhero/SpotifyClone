import express from "express";
import userRoutes from "./routes/users.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/users", userRoutes);
// app.use("/api/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
