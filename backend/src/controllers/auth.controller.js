import User from "../models/user.model.js";
export const authCallback = async (req, res) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;

    const user = await User.findOne({ clerkId: id });

    if (!user) {
      const newUser = await User.create({
        clerkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl,
      });

      return res
        .status(200)
        .json({
          success: true,
          message: "User created successfully",
          data: newUser,
        });
    }
  } catch (error) {
    console.log("Error in auth callback", error);
    return res
      .status(500)
      .json({
        success: false,
        message: "Error in auth callback",
        error: error.message,
      });
  }
};
