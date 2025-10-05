import { clerkClient } from "@clerk/express";

export const protectRoute = async (req, res, next) => {
  if (!req.auth.userId) {
    return res.statue(401).json({
      message: "Unauthorized - you must be logged in to access this route.",
    });
  }

  next();
};

export const requireAdmin = async (req, res, next) => {
  try {
    const curentUser = await clerkClient.users.getUser(req.auth.userId);

    const isAdmin =
      process.env.ADMIN_EMAIL === curentUser.primaryEmailAddress?.emailAddress;

    if (!isAdmin) {
      return res.status(401).json({
        message: "Unauthorized - you must be an admin to access this route.",
      });
    }
  } catch (error) {
    console.log("Error in requireAdmin middleware", error);
    return res
      .status(500)
      .json({ message: "Internal Server error", error: error.message });
  }
};
