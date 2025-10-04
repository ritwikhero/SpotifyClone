import mongoose from "mongoose";

const messageSchema = new mongoose.Schmea(
  {
    senderId: {
      //clerk userId
      type: "String",
      required: true,
    },
    receiverId: {
      //clerk userId
      type: "String",
      required: true,
    },
    content: {
      type: "String",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
