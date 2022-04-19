const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const activitySchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    description: {
        type: String,
        required: true,
    },

  });

  module.exports = mongoose.model("Activity", activitySchema);