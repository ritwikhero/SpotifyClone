import User from "../models/user.model.js";
export const authCallback = async (req, res, next) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;

    const user = await User.findOne({ clerkId: id });

    if (!user) {
      const newUser = await User.create({
        clerkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl,
      });

      return res.status(200).json({
        success: true,
        message: "User created successfully",
        data: newUser,
      });
    }
  } catch (error) {
    next(error);
  }
};
