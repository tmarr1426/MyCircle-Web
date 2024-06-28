// Creates the Schema for the Room
const mongoose = require("mongoose");
const User = require("./user_model");
const Room = require("./room_model");

const MessageSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.ObjectId,
      required: true,
      ref: User,
    },
    room: {
      type: String,
      required: true,
      ref: Room,
    },
    postBody: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("message", MessageSchema);
