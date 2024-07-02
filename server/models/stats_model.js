// Creates the Schema for the Room
const mongoose = require("mongoose");
const User = require("./user_model");

const StatsSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.ObjectId,
      required: true,
      ref: User,
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

module.exports = mongoose.model("stats", StatsSchema);
