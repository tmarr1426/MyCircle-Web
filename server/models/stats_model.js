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
    score10: {
      type: Number,
      required: true,
    },
    score15: {
      type: Number,
      required: true,
    },
    score20: {
      type: Number,
      required: true,
    },
    score25: {
      type: Number,
      required: true,
    },
    score30: {
      type: Number,
      required: true,
    },
    score35: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("stats", StatsSchema);
